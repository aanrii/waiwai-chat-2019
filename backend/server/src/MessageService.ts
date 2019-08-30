import { EventEmitter } from 'events';
import * as grpc from 'grpc';
import * as message_service_grpc_pb from './proto/MessageService_grpc_pb';
import * as message_service_pb from './proto/MessageService_pb';

class MessageService implements message_service_grpc_pb.IMessageServiceServer {
  private readonly messageEventEmitter = new EventEmitter();
  private readonly pastMessageList: message_service_pb.Message[] = [];

  public getMessageStream(call: grpc.ServerWriteableStream<message_service_pb.GetMessageStreamRequest>) {
    this.pastMessageList.forEach(message => call.write(message));

    const handler = (message: message_service_pb.Message) => call.write(message);
    this.messageEventEmitter.on('post', handler);
    call.on('close', () => {
      this.messageEventEmitter.removeListener('post', handler);
    });
  }

  public postMessage(
    call: grpc.ServerUnaryCall<message_service_pb.Message>,
    callback: grpc.sendUnaryData<message_service_pb.PostMessageResponse>
  ) {
    const message = call.request;
    this.pastMessageList.push(message);
    this.messageEventEmitter.emit('post', message);

    const response = new message_service_pb.PostMessageResponse();
    response.setMessageId(message.getId());
    response.setStatus('ok');

    callback(null, response);
  }
}

export default MessageService;
