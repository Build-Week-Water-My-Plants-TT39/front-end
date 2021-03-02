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
} from '../actions/userActions';

const initialState = {
  user: {},
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_UP_LOADING:
      return {
        user: {
          ...state.user,
        },
      };

    case SIGN_UP_SUCCESS:
      return {
        user: {
          ...state.user,
        },
      };
    case SIGN_UP_FAILURE:
      return {
        user: {
          ...state.user,
        },
      };
    case LOGIN_LOADING:
      return {
        user: {
          ...state.user,
        },
      };
    case LOGIN_SUCCESS:
      return {
        user: {
          ...state.user,
        },
      };
    case LOGIN_FAILURE:
      return {
        user: {
          ...state.user,
        },
      };
    case UPDATE_USER_LOADING:
      return {
        user: {
          ...state.user,
        },
      };
    case UPDATE_USER_SUCCESS:
      return {
        user: {
          ...state.user,
        },
      };
    case UPDATE_USER_FAILURE:
      return {
        user: {
          ...state.user,
        },
      };
    default:
      return state;
  }
};

export default userReducer;
