import React from "react";
import Users from "./Users";
import { connect } from "react-redux";
import {
  checkIsFetching,
  requestUsers
} from "../../Redux/usersr-reducer";
import Preloader from "../common/preloader/Preloader";
import { getUsers, getTotalUsersCount, getPage, getIsFetching, getPortionSize } from "../../Redux/users-selector.js";
import { compose } from "redux";
import { withRouter } from "react-router-dom";

class UsersContainer extends React.Component {
  refreshUsersData = () => {
    let page = this.props.match.params.page;
    if(!page) {
      page = this.props.currentPage;
    }
      this.props.requestUsers(page);
  };

  componentDidMount() {
    this.refreshUsersData();
      };

  componentDidUpdate(prevProps) {
    if(this.props.match.params !== prevProps.match.params) {
      this.refreshUsersData();
    } 
  };

  onPageChange = (p) => {
    this.props.requestUsers(p)
  };

  render() {
    return (
      <>
        {this.props.isFetching ? <Preloader /> : null}
        
        <Users
          users={this.props.users}
          totalUsersCount={this.props.totalUsersCount}
          currentPage={this.props.currentPage}
          onPageChange={this.onPageChange}
          portionSize={this.props.portionSize}
        />
      </>
    );
  }
};

let mapStateToProps = (state) => {
  return {
    users: getUsers(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getPage(state),
    isFetching: getIsFetching(state),
    portionSize: getPortionSize(state)
  };
};

export default compose(
  connect(mapStateToProps, {
    checkIsFetching,
    requestUsers,
  }),
  withRouter
) (UsersContainer);



