import {
  SIGN_UP_LOADING,
  SIGN_UP_SUCCESS,
  SIGN_UP_FAILURE,
  LOGIN_LOADING,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  UPDATE_USER_FAILURE,
  UPDATE_USER_SUCCESS,
  UPDATE_USER_LOADING,
  USER_LOGOUT,
} from '../actions/userActions';

const initialState = {
  user: {},
  isLoading: false,
  errors: '',
  isLoggedIn: window.localStorage.getItem('token'),
  isSignedUp: false,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
        isSignedUp: false,
        isLoggedIn: false,
      };

    case SIGN_UP_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isSignedUp: true,
      };
    case SIGN_UP_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isSignedUp: false,
      };
    case LOGIN_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
        isLoggedIn: false,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case UPDATE_USER_LOADING:
      return {
        ...state,
        isLoading: true,
        error: '',
        isLoggedIn: false,
      };
    case UPDATE_USER_SUCCESS:
      return {
        ...state,
        user: action.payload,
        isLoading: false,
        isLoggedIn: true,
      };
    case UPDATE_USER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
        isLoggedIn: false,
      };
    case USER_LOGOUT:
      return {
        user: {},
        isLoading: false,
        error: '',
        isLoggedIn: false,
      };
    default:
      return state;
  }
};

export default userReducer;
