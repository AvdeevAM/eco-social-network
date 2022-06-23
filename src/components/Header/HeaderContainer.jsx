import React from "react";
import { connect } from "react-redux";
import Header from "./Header";
import { logout } from "./../../redux/authReducer";
import { toggleUITheme } from "./../../redux/appReducer"

class HeaderContainer extends React.Component {
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth,
  login: state.auth.login,
  email: state.auth.email,
  photo: state.auth.photo,
  fullName: state.auth.fullName,
  darkTheme: state.app.darkTheme,
});

export default connect(mapStateToProps, { logout, toggleUITheme })(HeaderContainer);
