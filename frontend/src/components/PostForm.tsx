import * as React from 'react';
import PostMessageForm from './PostMessageForm';
import SetAuthorNameForm from './SetAuthorNameForm';

class PostForm extends React.Component<{}, { authorName: string; authorNameInputted: boolean }> {
  state = { authorName: '', authorNameInputted: false };

  setAuthorName = (authorName: string) => {
    this.setState({
      authorName,
      authorNameInputted: authorName.length > 0,
    });
  };

  render() {
    return this.state.authorNameInputted ? (
      <PostMessageForm authorName={this.state.authorName} />
    ) : (
      <SetAuthorNameForm setAuthorNameFunc={this.setAuthorName} />
    );
  }
}

export default PostForm;
