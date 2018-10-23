import React from 'react'

class MessageList extends React.Component {
  render() {
    console.log(this.props.messages);

    return (
      <div className="chat-message-list">
        <ul className="form-group">
          <div className="row">
            <div className="col-md-3">
              <span className="input-sm"><b>Name</b></span>
            </div>
            <div className="col-md-5">
              <span className="input-sm"><b>Message</b></span>
            </div>
            <div className="col-md-3">
              <span className="input-sm"><b>Date</b></span>
            </div>
          </div>
          {this.props.messages.map((message, index) => (
            <li key={index}>
              <div className="row">
                <div className="col-md-3">
                  <span className="input-sm">{message.senderId}</span>
                </div>
                <div className="col-md-5">
                  <span className="input-sm">{message.text}</span>
                </div>
                <div className="col-md-3">
                  <span className="input-sm">{message.createdAt}</span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    )
  }
}

export default MessageList