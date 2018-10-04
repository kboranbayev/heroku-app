import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container } from "semantic-ui-react";
import ConfirmEmailMessage from "../messages/ConfirmEmailMessage";
import ChatFeature from "../chat/ChatFeature"

class DashboardPage extends React.Component {
  render() {
    const { isConfirmed, username } = this.props;
    return (
      <Container>
        {
          (!isConfirmed && <ConfirmEmailMessage />)
          ? <div />
          : <ChatFeature username={username} />
        }
      </Container>
    );
  }
}

DashboardPage.propTypes = {
  isConfirmed: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    isConfirmed: !!state.user.confirmed,
    username: state.user.email
  };
}

export default connect(mapStateToProps)(DashboardPage);
