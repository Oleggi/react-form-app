import { authAPI } from '../API/api';
import { stopSubmit } from "redux-form";
const SET_AUTH_DATA = "login-from-test/auth/SET_AUTH_DATA";
const SET_IS_FETCHING = "login-from-test/auth/SET_IS_FETCHING";


let initialState = {
    isAuth: false,
    isFetching: null
  };

  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_AUTH_DATA:
        return {
          ...state,
          isAuth: action.isAuth,
        };
        case SET_IS_FETCHING:
          return {
            ...state,
            isAuth: action.isFetching,
          };
      default:
        return state;
    }
  };

  const setAuthMeData = (isAuth) => {
    return {
      type: SET_AUTH_DATA,
      isAuth
    }
  };

  // const setIsFetching = (isFetching) => {
  //   return {
  //     type: SET_IS_FETCHING,
  //     isFetching
  //   }
  // };



  export const logInUser = (email, password) => async (
    dispatch
  ) => {
    try {
      const response = await authAPI.login(email, password);
      if(response && response.status === 200) {
        dispatch(setAuthMeData(true));
      };
    } catch(err) {
      dispatch(stopSubmit("login", { _error: 'Wrong password or email' }));
    }
    };
  
export default authReducer;