import {
  USER_LOADING,
  USER_LOADED,
  AUTH_ERROR,
  PROCESS_LOGIN,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS,
} from "../actions/authActions";

const initialState = {
  token: localStorage.getItem("token"),
  isAuthenticated: null,
  isLoading: false,
  user: null,
  //TODO: errors: null,
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case USER_LOADING:
    case PROCESS_LOGIN:
      return {
        ...state,
        isLoading: true,
      };
    case USER_LOADED:
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        isLoading: false,
        user: localStorage.getItem("user"),
      };
    case LOGIN_SUCCESS:
      localStorage.setItem("token", action.payload.jwt);
      localStorage.setItem("user", action.payload.user);
      return {
        ...state,
        token: localStorage.getItem("token"),
        isAuthenticated: true,
        isLoading: false,
        user: localStorage.getItem("user"),
      };
    case AUTH_ERROR:
    case LOGIN_FAIL:
    case LOGOUT_SUCCESS:
      localStorage.removeItem("token");
      return {
        ...state,
        token: null,
        user: null,
        isAuthenticated: false,
        isLoading: false,
      };
    default:
      return state;
  }
}
