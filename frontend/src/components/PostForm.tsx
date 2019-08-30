import React, { useState, FormEvent } from 'react';
import { Message as ProtoMessage } from '../proto/MessageService_pb';
import attatchMessageServiceClient, { MessageServiceClientAttached } from './attatchMessageServiceClient';

const PostForm: React.FC<{ initialInputText?: string } & MessageServiceClientAttached> = ({
  initialInputText = '',
  client,
}) => {
  const [inputText, setInputText] = useState(initialInputText);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const currentDate = Date.now();
    const message = new ProtoMessage();

    message.setAuthorName('hoge');
    message.setCreateTime(currentDate);
    message.setId('hoge' + currentDate.toString());
    message.setText(inputText);
    client.postMessage(message, (error, response) => console.log(error == null ? error : response));

    setInputText('');
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" name="inputText" value={inputText} onChange={e => setInputText(e.target.value)} />
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};

export default attatchMessageServiceClient(PostForm);
