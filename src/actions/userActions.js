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

export const USER_LOGOUT = 'USER_LOGOUT';

//SignUp Action Obj
export const signUpUser = (signup) => (dispatch) => {
  dispatch({ type: SIGN_UP_LOADING });

  axiosWithAuth()
    .post('/auth/register', signup)
    .then((res) => {
      dispatch({ type: SIGN_UP_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: SIGN_UP_FAILURE, payload: err.response.data.message });
    });
};

export const loginUser = (login) => (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch({ type: LOGIN_LOADING });

  axiosWithAuth()
    .post('/auth/login', login)
    .then((res) => {
      window.localStorage.setItem('token', res.data.token);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      dispatch({ type: LOGIN_FAILURE, payload: err.response.data.message });
    });
};

export const logoutUser = () => (dispatch) => {
  window.localStorage.removeItem('token');
  dispatch({ type: USER_LOGOUT });
};

export const updateUser = (userId, update) => (dispatch) => {
  dispatch({ type: UPDATE_USER_LOADING });

  axiosWithAuth()
    .put(`/auth/${userId}/update`)
    .then((res) => {
      console.log('Update User Success:', res.data);
      dispatch({ type: UPDATE_USER_SUCCESS, payload: res.data });
    })
    .catch((err) => {
      console.log('Update User Failure:', err.message);
      dispatch({
        type: UPDATE_USER_FAILURE,
        payload: err.response.data.message,
      });
    });
};
