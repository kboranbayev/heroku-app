import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import ChatScreen from './ChatScreen';

class ChatFeature extends React.Component {
  render() {
    const { username, chatkitToken } = this.props;
    return (
      <Container>
        Chat 
        username is { username }
        <ChatScreen currentUsername= { username } chatkitToken = { chatkitToken } />
      </Container>
    );
  }
}

ChatFeature.propTypes = {
  username: PropTypes.string.isRequired
};

function mapStateToProps(state) {
  return {
    isAuthenticated: !!state.user.token,
    chatkitToken: state.user.chatkitToken
  };
}

export default connect(mapStateToProps, {})(ChatFeature);
