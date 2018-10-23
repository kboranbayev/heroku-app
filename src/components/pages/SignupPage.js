import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import SignupForm from '../forms/SignupForm';
import { signup } from '../../actions/users';
import { Container } from "semantic-ui-react";

class SignupPage extends React.Component {
  submit = (data) =>
    this.props.signup(data).then(() => this.props.history.push("/dashboard"));

  render() {
    return (
      <div className="">
        <aside class="react-page-heading">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1 class="react-page-heading-lead">
                  Sign Up
                  <span class="react-border"></span>
                </h1>
              </div>
            </div>
          </div>
        </aside>
        <div className="container">
          <div class="col-md-12">
            <SignupForm submit={this.submit} />
          </div>
        </div>
      </div>
    );
  }
}

SignupPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  signup: PropTypes.func.isRequired
};

export default connect(null, { signup })(SignupPage);
