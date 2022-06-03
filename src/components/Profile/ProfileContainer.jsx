import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
} from "./../../redux/profileReducer";
import { WithAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { WithRouter } from "../../HOC/WithRouter";

class ProfileContainer extends React.Component {
  componentDidMount() {
    let userId;
    if (this.props.match !== null) {
      userId = this.props.match.params.userId || this.props.authorizedUserId;
    }
    if (!userId) {
      userId = this.props.authorizedUserId;
      if (!userId) {
      this.props.history.push("/login");
      }
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }
  render() {
    return (
      <Profile
        {...this.props}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
});

export default compose(
  connect(mapStateToProps, { getUserProfile, getUserStatus, updateStatus }),
  WithRouter,
  WithAuthRedirect
)(ProfileContainer);
