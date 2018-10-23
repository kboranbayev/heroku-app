import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Container, Message } from "semantic-ui-react";
import ForgotPasswordForm from "../forms/ForgotPasswordForm";
import { resetPasswordRequest } from "../../actions/auth";

class ForgotPasswordPage extends React.Component {
  state = {
    success: false
  };

  submit = data =>
    this.props
      .resetPasswordRequest(data)
      .then(() => this.setState({ success: true }));

  render() {
    return (
     

      <div className="">
        <aside class="react-page-heading">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="react-page-heading-lead">
                  Forgot Password
                  <span class="react-border"></span>
                </h1>
              </div>
            </div>
          </div>
        </aside>
        <div className="container">
          <div class="col-md-12">
            <Container>
              {this.state.success ? (
                <Message>Email has been sent.</Message>
              ) : (
                <ForgotPasswordForm submit={this.submit} />
              )}
            </Container>
          </div>
        </div>
      </div>
    );
  }
}

ForgotPasswordPage.propTypes = {
  resetPasswordRequest: PropTypes.func.isRequired
};

export default connect(null, { resetPasswordRequest })(ForgotPasswordPage);
