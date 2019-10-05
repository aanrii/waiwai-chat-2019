/** @jsx jsx */
import { css, jsx, Global } from '@emotion/core';
import * as React from 'react';
import Header from './Header';
import MessageList from './MessageList';
import PostForm from './PostForm';

const Main: React.SFC<{}> = () => (
  <div
    css={{
      marginLeft: `auto`,
      marginRight: `auto`,
      padding: `0px 10px`,
      maxWidth: `640px`,
      display: `block`,
      // height: `100vh`,
    }}
  >
    <Global
      styles={css`
        input,
        button,
        textarea,
        select {
          -webkit-appearance: none;
          -moz-appearance: none;
          appearance: none;
        }
        body {
          background-image: url("./bg.png");
          background-repeat: repeat;
      `}
    />
    <div
      css={{
        height: '60px',
      }}
    >
      <Header />
    </div>
    <div
      css={{
        height: '50px',
      }}
    >
      <PostForm />
    </div>
    <div>
      <MessageList />
    </div>
  </div>
);

export default Main;
