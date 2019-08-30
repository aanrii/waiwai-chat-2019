import React from 'react';
import PostForm from './components/PostForm';
import MessageList from './components/MessageList';

const App: React.FC = () => {
  return (
    <div>
      <PostForm />
      <MessageList />
    </div>
  );
};

export default App;
