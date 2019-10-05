/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, FormEvent } from 'react';
import { Message as ProtoMessage } from '../proto/MessageService_pb';
import attatchMessageServiceClient, { MessageServiceClientAttached } from './attatchMessageServiceClient';

const MAX_INPUT_TEXT_LENGTH = 200;

const PostMessageForm: React.FC<{ authorName: string } & MessageServiceClientAttached> = ({ authorName, client }) => {
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputText.length === 0 || inputText.length > MAX_INPUT_TEXT_LENGTH) {
      return;
    }

    setIsLoading(true);

    const currentDate = Date.now();
    const message = new ProtoMessage();
    message.setAuthorName(authorName);
    message.setCreateTime(currentDate);
    message.setText(inputText);

    client.postMessage(message, (error, response) => {
      if (error) {
        setErrorMessage(error.message);
      } else {
        setInputText('');
      }
      setIsLoading(false);
    });
  };

  return (
    <div>
      名前: <b>{authorName}</b>
      <br />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          disabled={isLoading}
          maxLength={MAX_INPUT_TEXT_LENGTH}
          css={{
            marginRight: `10px`,
            width: `70%`,
          }}
        />
        <input type="submit" value="発言" disabled={isLoading} />
        {errorMessage.length > 0 ? (
          <span
            css={{
              color: 'red',
            }}
          >
            {errorMessage}
          </span>
        ) : (
          ''
        )}
      </form>
    </div>
  );
};

export default attatchMessageServiceClient(PostMessageForm);
