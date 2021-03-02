export const SIGN_UP_LOADING = 'SIGN_UP_LOADING';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

export const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

export const signUpLoading = (signup) => (dispatch) => {
  dispatch({ type: SIGN_UP_LOADING });
};

export const loginLoading = (login) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
};

export const updateUser = (userId, update) => (dispatch) => {
  dispatch({ type: UPDATE_USER_LOADING });
};
