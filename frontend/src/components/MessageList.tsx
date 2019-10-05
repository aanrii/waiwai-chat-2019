import * as React from 'react';
/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import Message from './Message';
import { Message as ProtoMessage, GetMessagesByIdRangeRequest } from '../proto/MessageService_pb';
import attatchMessageServiceClient, { MessageServiceClientAttached } from './attatchMessageServiceClient';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import InfiniteScroll from 'react-infinite-scroller';
import { MessageServiceClient, ResponseStream, Status } from '../proto/MessageService_pb_service';

interface MessageListState {
  protoMessageList: ProtoMessage[];
  readLastId: number;
  messageServiceClient: MessageServiceClient;
}

class MessageList extends React.Component<void & MessageServiceClientAttached, MessageListState> {
  static readonly MAX_ATTEMPTS = 10;
  private numConnectAttempt = 0;

  attemptToConnectMessageStream() {
    return new Promise((resolve, reject) => {
      this.numConnectAttempt += 1;
      if (this.numConnectAttempt >= MessageList.MAX_ATTEMPTS) {
        reject(new Error('The number of connection attempt reaches its limit.'));
        return;
      }

      const messageStream = this.state.messageServiceClient.getMessageStream(new Empty());
      messageStream.on('data', message => {
        const newProtoMessageList = [message].concat(this.state.protoMessageList);
        this.setState({ protoMessageList: newProtoMessageList });
        this.numConnectAttempt = 0;
      });
      messageStream.on('status', status => {
        console.error(status);
        setTimeout(() => this.attemptToConnectMessageStream(), 500);
      });
      resolve();
    });
  }

  constructor(props: {} & MessageServiceClientAttached) {
    super(props);
    this.state = {
      protoMessageList: [],
      readLastId: -1,
      messageServiceClient: props.client,
    };

    this.attemptToConnectMessageStream().then(() => {
      props.client.getLatestMessageList(new Empty(), (err, response) => {
        if (err) {
          throw err;
        } else if (!response) {
          throw new Error('The server returns an empty response.');
        }
        this.setState({
          protoMessageList: this.state.protoMessageList.concat(response.getMessageList()),
          readLastId: response.getLastId(),
        });
      });
    });
  }

  loadMoreMessages() {
    const request = new GetMessagesByIdRangeRequest();
    request.setIdFrom(this.state.readLastId);

    this.props.client.getMessageListByIdRange(request, (err, response) => {
      if (err) {
        console.error(err);
        return;
      }

      if (!response || response.getMessageList().length === 0) {
        console.error('getMessageListByIdRange response is null');
        this.setState({
          readLastId: -1,
        });
        return;
      }

      this.setState({
        protoMessageList: this.state.protoMessageList.concat(response.getMessageList()),
        readLastId: response.getLastId(),
      });
    });
  }

  render() {
    return (
      <div
        css={css`
          height: calc(100vh - 110px);
          overflow: scroll;
        `}
      >
        <hr />
        <InfiniteScroll
          pageStart={0}
          loadMore={() => this.loadMoreMessages()}
          hasMore={this.state.readLastId >= 0}
          loader={<div key="0">Loading ...</div>}
          useWindow={false}
        >
          {this.state.protoMessageList.map(protoMessage => (
            <Message
              {...protoMessage.toObject()}
              key={`${protoMessage.getAuthorName()}-${protoMessage.getCreateTime()}`}
            />
          ))}
        </InfiniteScroll>
      </div>
    );
  }
}

export default attatchMessageServiceClient(MessageList);
