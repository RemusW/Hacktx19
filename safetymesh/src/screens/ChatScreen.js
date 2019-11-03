import React from 'react';
import { Bubble, GiftedChat, Send } from 'react-native-gifted-chat';
import { globalColors } from '../Styles';

export default class ChatScreen extends React.Component {
  state = {
    messages: [
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 3,
          name: 'React Native',
        },
      },
    ],
  };

  async onSend(messages = []) {
    await this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }));
    console.log(this.state.messages);
  }

  renderSend(props) {
    return (
      <Send
        {...props}
        textStyle={{color: globalColors.primary, fontWeight: 'bold'}}
        label={'Send'}
      />
    );
  }

  renderBubble(props) {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: {
            backgroundColor: globalColors.primary,
          },
        }}
      />
    );
  }

  render() {
    return (
      <GiftedChat
        messages={this.state.messages}
        onSend={messages => this.onSend(messages)}
        alwaysShowSend={true}
        renderSend={this.renderSend}
        renderBubble={this.renderBubble}
        user={{
          _id: 1,
        }}
      />
    );
  }
}
