/** @jsx jsx */
import { css, jsx } from '@emotion/core';
import React, { useState, FormEvent } from 'react';

const SetAuthorNameForm: React.FC<{ initialInputText?: string; setAuthorNameFunc: (authorName: string) => void }> = ({
  initialInputText = '',
  setAuthorNameFunc,
}) => {
  const [inputText, setInputText] = useState(initialInputText);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAuthorNameFunc(inputText);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        おなまえ:
        <input
          type="text"
          name="inputText"
          value={inputText}
          onChange={e => setInputText(e.target.value)}
          css={{
            marginRight: `10px`,
            width: `80%`,
          }}
        />
        <input type="submit" value="入室" />
      </form>
    </div>
  );
};

export default SetAuthorNameForm;
