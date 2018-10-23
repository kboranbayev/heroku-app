import React from "react";
import PropTypes from "prop-types";
import { Menu, Label } from "semantic-ui-react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import * as actions from "../../actions/auth";

class TopNavigation extends React.Component {
  
  state = {
    activeItem: 'home'
  }
  
  handleItemClick = (e, { name }) => this.setState({ activeItem: name });
  
  render() {
    const { activeItem } = this.state;
    const { user, logout } = this.props;

    return(
      <Menu secondary>
        <Menu.Item name='home' className="btn btn-primary" active={activeItem === 'home'} onClick={this.handleItemClick} as={Link} to="/">
          <span className="">HOME</span>
        </Menu.Item>
        <Menu.Item name='dashboard' className="btn btn-primary" active={activeItem === 'dashboard'} onClick={this.handleItemClick} as={Link} to="/dashboard">
          <span className="">DASHBOARD</span>
        </Menu.Item>
        <Menu.Menu>
        </Menu.Menu>
        {!!user.email
            ? 
              (<Menu.Menu position="right">
                <Menu.Item>
                  <Label size={'tiny'} circular>{user.email}</Label>
                </Menu.Item>
                <Menu.Item name='account' active={activeItem === 'account'} onClick={this.handleItemClick} as={Link} to="/account_info">
                  <span className="">ACCOUNT INFO</span>
                </Menu.Item>
                <Menu.Item name='logout' active={activeItem === 'logout'} onClick={() => logout()}>Logout</Menu.Item>
              </Menu.Menu>)  
            :
              (<Menu.Menu position="right">
                <Menu.Item name='login' active={activeItem === 'login'} onClick={this.handleItemClick} as={Link} to="/login">Login</Menu.Item>
                <Menu.Item name='signup' active={activeItem === 'signup'} onClick={this.handleItemClick} as={Link} to="/signup">Signup</Menu.Item>  
              </Menu.Menu>)
          }
      </Menu>
    );
  }
}

TopNavigation.propTypes = {
  user: PropTypes.shape({
    email: PropTypes.string
  }),
  logout: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { logout: actions.logout })(
  TopNavigation
);
