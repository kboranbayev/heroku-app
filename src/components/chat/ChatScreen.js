import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Chatkit from '@pusher/chatkit'
import MessageList from './MessageList'
import SendMessageForm from './SendMessageForm'
import { authenticateChatUser } from '../../actions/auth';

class ChatScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      currentRoom: {},
      currentUser: {},
      typingUsers: [],
      messages: []
    }
    this.sendMessage = this.sendMessage.bind(this)
    this.sendTypingEvent = this.sendTypingEvent.bind(this)
  }

  componentDidMount () {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:8bc1011c-33d7-4b48-9970-62f4d1232918',
      userId: this.props.currentUsername,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:3000/api/auth/chatkit',
          headers: {
            Authorization: "Bearer " + this.props.chatkitToken,
            'Content-Type': 'application/json'
          }
      })
    })

    chatManager
      .connect()
      .then(currentUser => {
        this.setState({currentUser})
        return currentUser.subscribeToRoom({
          roomId: 12999988,
          messageLimit: 100,
          hooks: {
            onNewMessage: message => {
              this.setState({
                messages: [...this.state.messages, message]
              })
            },
            onUserStartedTyping: user => { console.log(user.name, ' started typing')},
            onUserStoppedTyping: user => { console.log(user.name, ' stopped typing')},
          },
        })
      })
        .then(currentRoom => {
        this.setState({currentRoom})
      })
        .catch(error => console.error(error))
  }

  sendMessage(text) {
    this.state.currentUser.sendMessage({
      roomId: this.state.currentRoom.id,
      text
    })
  }

  sendTypingEvent() {
    this.state.currentUser
      .isTypingIn({roomId: this.state.currentRoom.id})
      .catch(error => console.error('error', error))
  }

  render() {
    return (
      <div>
        <MessageList messages={this.state.messages} />
        <SendMessageForm 
          onSubmit={this.sendMessage}
          onChange={this.sendTypingEvent}
        />
      </div>
    )
  }
}

ChatScreen.propTypes = {
  authenticateChatUser: PropTypes.func.isRequired
};

export default connect(null, { authenticateChatUser })(ChatScreen);
