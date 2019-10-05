import * as React from 'react';
import { Message as ProtoMessage } from '../proto/MessageService_pb';
import moment from 'moment';

const Message: React.SFC<ProtoMessage.AsObject> = protoMessage => {
  const formattedDateStr = moment(protoMessage.createTime).format('YYYY/MM/DD-HH:mm:ss');
  return (
    <div>
      <div>
        <b>{protoMessage.authorName}</b> > {protoMessage.text} ({formattedDateStr})
      </div>
      <hr />
    </div>
  );
};

export default Message;
