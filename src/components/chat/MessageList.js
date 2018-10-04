import React from 'react'

class MessageList extends React.Component {
  render() {
    return (
      <ul>
        {this.props.messages.map((message, index) => (
          <li key={index}>
            <div>
              <p>
                <b>{message.senderId}: </b>
                <span>{message.text}</span>
              </p>
            </div>
          </li>
        ))}
      </ul>
    )
  }
}

export default MessageList