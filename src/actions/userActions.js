import axiosWithAuth from '../utils/axiosWithAuth';

//SignUpActions
export const SIGN_UP_LOADING = 'SIGN_UP_LOADING';
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS';
export const SIGN_UP_FAILURE = 'SIGN_UP_FAILURE';

//Login Actions
export const LOGIN_LOADING = 'LOGIN_LOADING';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

//Update User Actions
export const UPDATE_USER_LOADING = 'UPDATE_USER_LOADING';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
export const UPDATE_USER_FAILURE = 'UPDATE_USER_FAILURE';

//SignUp Action Obj
export const signUpLoading = (signup) => (dispatch) => {
  dispatch({ type: SIGN_UP_LOADING });

  axiosWithAuth()
  .post('/auth/register', signup)
  .then(res => {
    console.log("SignUpSuccess", res)
    dispatch({type:SIGN_UP_SUCCESS, payload: res.data})
    window.location.href = '/login'
  })
  .catch(err => {
    console.log('SignUpFail:' err);
    dispatch({type: SIGN_UP_FAILURE, payload: err.message})
  })
};

export const loginLoading = (login) => (dispatch) => {
  dispatch({ type: LOGIN_LOADING });
  window.localStorage.removeItem('token');
  
};

export const updateUser = (userId, update) => (dispatch) => {
  dispatch({ type: UPDATE_USER_LOADING });
};
