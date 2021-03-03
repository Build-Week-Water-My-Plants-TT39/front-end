import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import loginFormSchema from '../utils/loginFormSchema';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { useHistory } from 'react-router';

//CSS Styling
const StyledForm = styled.div`
  text-align: center;

  h2 {
    font-size: 3.2rem;
    border-bottom: 1px solid black;
    width: 75%;
    margin-right: auto;
    margin-left: auto;
  }

  p {
    margin-top: -2%;
    color: grey;
    font-size: 1.2rem;
  }

  form {
    background-color: #e6ebe7;
    border-radius: 25px 25px;
    width: 50%;
    height: 40vh;
    margin: 0 auto;
  }

  input {
    font-size: 1.2rem;
    margin: 0 5% 5% 1%;
  }

  button {
    font-size: 1.2rem;
    border-radius: 15px 15px;
    padding: 8px;
    background-color: #acc8af;
    border: 1px solid grey;

    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;

//Creating initial login values
const initialLogin = {
  username: '',
  password: '',
};

const LoginForm = (props) => {
  //Setting State Hooks
  const [loginValue, setLoginValue] = useState(initialLogin);
  const [errors, setErrors] = useState(initialLogin);
  const [disabled, setDisabled] = useState(true);
  const { push } = useHistory();

  //Creating form Validty with Yup
  const setLoginErrors = (name, value) => {
    yup
      .reach(loginFormSchema, name)
      .validate(value)
      .then(() => setErrors({ ...errors, [name]: '' }))
      .catch((err) => setErrors({ ...errors, [name]: err.errors[0] }));
  };

  //Creating form Validty with Yup
  useEffect(() => {
    loginFormSchema.isValid(loginValue).then((valid) => setDisabled(!valid));
  }, [loginValue]);

  //Allowing target value to be changed
  const changeHandler = (e) => {
    const { name, value } = e.target;
    setLoginErrors(name, value);
    setLoginValue({ ...loginValue, [name]: value });
  };

  //Creating submit event
  const submitHandler = (event) => {
    event.preventDefault();
    const userObj = {
      username: loginValue.username.trim(),
      password: loginValue.password.trim(),
    };
    props.loginUser(userObj);
    setLoginValue(initialLogin);
  };

  //checks if isLogged in
  useEffect(() => {
    if (props.isLoggedIn) {
      push('/plants');
    }
  }, [props.isLoggedIn]);

  return (
    <StyledForm>
      <form onSubmit={submitHandler}>
        <div>
          <h2>User login</h2>
          <p>Sign in below</p>
        </div>
        <div>
          <div style={{ color: 'red' }}>{errors.password}</div>
          <div style={{ color: 'red' }}>{errors.username}</div>
          <label>
            <input
              name="username"
              type="text"
              value={loginValue.username}
              onChange={changeHandler}
              placeholder="Username"
            />
          </label>
          <label>
            <input
              name="password"
              type="password"
              value={loginValue.password}
              onChange={changeHandler}
              placeholder="Password"
            />
          </label>
          <button disabled={disabled}>Login</button>
        </div>
        <div></div>
      </form>
      <button onClick={() => push('/signup')}>No account? Sign up!</button>
    </StyledForm>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
