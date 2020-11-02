// import { updateObjInArray } from "../Utils/objMapHelper";
import { usersAPI } from "../API/api";
const SET_USERS = "social-network/users/SET_USERS";
const SET_CURRENT_PAGE = "social-network/users/SET_CURRENT_PAGE";
const CHECK_IS_FETCHING = "social-network/users/CHECK_IS_FETCHING";
const SET_TOTAL_USERS_COUNT = "social-network/users/SET_TOTAL_USERS_COUNT";

let initialState = {
  totalUsersCount: 0,
  page: 1,
  users: [],
  portionSize: 7,
  isFetching: false,
  isFollowingActive: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: [...action.users] };
    }
    case SET_CURRENT_PAGE:
      return {
        ...state,
        page: action.page,
      };
    case CHECK_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case SET_TOTAL_USERS_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    default:
      return state;
  }
};

export const setUsers = (users) => {
  return {
    type: SET_USERS,
    users,
  };
};

export const setCurrentPage = (page) => {
  return {
    type: SET_CURRENT_PAGE,
    page,
  };
};

export const setTotalUsersCount = (totalCount) => {
  return {
    type: SET_TOTAL_USERS_COUNT,
    totalCount,
  };
};

export const checkIsFetching = (fetching) => {
  return {
    type: CHECK_IS_FETCHING,
    isFetching: fetching,
  };
};

export const requestUsers = (currentPage) => {
  return async (dispatch) => {
    dispatch(checkIsFetching(true));
    const response = await usersAPI.getUsers(currentPage);
    dispatch(checkIsFetching(false));
    dispatch(setUsers(response.data));
    dispatch(setTotalUsersCount(response.total));
    dispatch(checkIsFetching(false));
    dispatch(setCurrentPage(currentPage));
  };
};

export default usersReducer;
