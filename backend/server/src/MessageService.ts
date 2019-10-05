import { EventEmitter } from 'events';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import * as grpc from 'grpc';
import MessagePubSub from './MessagePubSub';
import MessageRepository from './MessageRepository';
import * as message_service_grpc_pb from './proto/MessageService_grpc_pb';
import * as message_service_pb from './proto/MessageService_pb';

class MessageService implements message_service_grpc_pb.IMessageServiceServer {
  private readonly messageRepository: MessageRepository = new MessageRepository();
  private readonly messagePubSub: MessagePubSub = new MessagePubSub();

  public async getMessageStream(call: grpc.ServerWriteableStream<Empty>) {
    try {
      const handler = await this.messagePubSub.addListener(message => call.write(message));
      call.on('error', err => {
        console.error(err);
        this.messagePubSub.removeListener(handler);
      });
    } catch (err) {
      console.error(err);
      call.end(err);
    }
  }

  public getLatestMessageList(
    call: grpc.ServerUnaryCall<Empty>,
    callback: grpc.sendUnaryData<message_service_pb.GetLatestMessagesResponse>
  ) {
    this.messageRepository
      .findLatest()
      .then(messageList => {
        const response = new message_service_pb.GetLatestMessagesResponse();
        response.setMessageList(messageList.messages);
        response.setLastId(messageList.lastId);
        callback(null, response);
      })
      .catch(err => callback(err, null));
  }

  public getMessageListByIdRange(
    call: grpc.ServerUnaryCall<message_service_pb.GetMessagesByIdRangeRequest>,
    callback: grpc.sendUnaryData<message_service_pb.GetMessagesByIdRangeResponse>
  ) {
    this.messageRepository
      .findByIdRange(call.request.getIdFrom())
      .then(messageList => {
        const response = new message_service_pb.GetMessagesByIdRangeResponse();
        response.setMessageList(messageList.messages);
        response.setLastId(messageList.lastId);
        callback(null, response);
      })
      .catch(err => {
        console.error(err);
        callback(err, null);
      });
  }

  public async postMessage(
    call: grpc.ServerUnaryCall<message_service_pb.Message>,
    callback: grpc.sendUnaryData<message_service_pb.PostMessageResponse>
  ) {
    const message = call.request;
    try {
      await this.messagePubSub.publish(message);
    } catch (err) {
      console.error(err);
      callback(err, null);
      return;
    }
    const response = new message_service_pb.PostMessageResponse();
    response.setStatus('ok');
    callback(null, response);

    // リポジトリへのセーブはあとで
    this.messageRepository.save(message).catch(err => console.error(err));
  }
}

export default MessageService;
