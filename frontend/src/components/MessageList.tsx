import React from 'react';
import Message from './Message';
import { Message as ProtoMessage, GetMessageStreamRequest } from '../proto/MessageService_pb';
import attatchMessageServiceClient, { MessageServiceClientAttached } from './attatchMessageServiceClient';

interface MessageListState {
  protoMessageList: ProtoMessage.AsObject[];
}

class MessageList extends React.Component<void & MessageServiceClientAttached, MessageListState> {
  constructor(props: {} & MessageServiceClientAttached) {
    super(props);
    this.state = { protoMessageList: [] };
    const messageStream = props.client.getMessageStream(new GetMessageStreamRequest());
    messageStream.on('data', message => {
      const newProtoMessageList = [message.toObject()].concat(this.state.protoMessageList);
      this.setState({ protoMessageList: newProtoMessageList });
    });
  }

  render() {
    return (
      <div>
        {this.state.protoMessageList.map(protoMessage => (
          <Message {...protoMessage} key={protoMessage.id} />
        ))}
      </div>
    );
  }
}

export default attatchMessageServiceClient(MessageList);
