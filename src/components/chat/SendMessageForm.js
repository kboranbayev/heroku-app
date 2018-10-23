import React from 'react'

class SendMessageForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: ''
    }

    this.onChange = this.onChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onChange(e) {
    this.setState({
      text: e.target.value
    })
    this.props.onChange()
  }

  onSubmit(e) {
    e.preventDefault()
    this.props.onSubmit(this.state.text)
  }

  render() {
    return(
      <div className="chat-form">
        <form onSubmit={this.onSubmit} className="form-group">
          <div className="col-md-10">
            <input 
              type='text'
              placeholder='Type message here ...'
              className="form-control input-lg"
              onChange={this.onChange}
            />
          </div>
          <div className="col-md-2">
            <input 
              type='submit'
              className="btn btn-primary"
              value="Send"
            />
          </div>
        </form>
      </div>
      )
    }
  }

export default SendMessageForm;
