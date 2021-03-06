import React from "react";
import Profile from "./Profile";
import { connect } from "react-redux";
import {
  getUserProfile,
  getUserStatus,
  updateStatus,
  savePhoto,
  saveData,
} from "./../../redux/profileReducer";
import { WithAuthRedirect } from "../../HOC/WithAuthRedirect";
import { compose } from "redux";
import { WithRouter } from "../../HOC/WithRouter";

class ProfileContainer extends React.Component {
  refreshProfile() {
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

  componentDidMount() {
    this.refreshProfile();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match !== this.props.match) {
      this.refreshProfile();
    }
  }

  render() {
    return (
      <Profile
        {...this.props}
        saveData={this.props.saveData}
        isOwner={!this.props.match}
        profile={this.props.profile}
        status={this.props.status}
        updateStatus={this.props.updateStatus}
        savePhoto={this.props.savePhoto}
        followed={this.props.followed}
      />
    );
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  isAuth: state.auth.isAuth,
  authorizedUserId: state.auth.userId,
  followed: state.profilePage.followed,
});

export default compose(
  connect(mapStateToProps, {
    getUserProfile,
    getUserStatus,
    updateStatus,
    savePhoto,
    saveData,
  }),
  WithRouter,
  WithAuthRedirect
)(ProfileContainer);
