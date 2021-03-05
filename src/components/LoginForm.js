import React, { useState, useEffect } from 'react';
import * as yup from 'yup';
import loginFormSchema from '../utils/loginFormSchema';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { loginUser } from '../actions/userActions';
import { useHistory } from 'react-router';

//CSS Styling

const StyledH1 = styled.div`
  background-image: url(https://i2.wp.com/wallpaperboat.com/wp-content/uploads/2020/04/green-aesthetic-wallpaper-download.jpg);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  background-size: 10% 100%;
`

const StyledForm = styled.div`
  text-align: center;
  

  h2 {
    font-size: 4rem;
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
    background-image: url(https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/pdflowerset17-gloy-01_1.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=0e68a7d5ce0710c5858aee0ec781871a);
    background-size:100% 100%;
    border-radius: 25px 25px;
    width: 50%;
    padding-bottom: 2.5%;
    margin: 3% auto 0 auto;
    display:flex;
    flex-direction: column;
    box-shadow: 10px 15px 15px #383a3d;
  }

  input {
    font-size: 1.2rem;
    border-radius: 10px 10px;
    margin-bottom: 3%;
    text-align: center;
    padding: 5px;
    border: 1px solid black;
  }

  button {
    font-size: 1.2rem;
    border-radius: 15px 15px;
    padding: 8px;
    background-color: #acc8af;
    border: 1px solid gray;
    width: 20%;
    margin: 0 auto 5% auto;
    color: #363f34;

    &:hover {
      transform: scale(1.2);
      transition: 0.5s;
    }
  }
`;

const StyledError = styled.div`


`


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
      push(`/plants/${props.userId}`);
    }
  }, [props.isLoggedIn, props.userId, push]);

  return (
    <StyledForm>
      <form onSubmit={submitHandler}>
        <div>
          <StyledH1>
            <h2>User login</h2>
          </StyledH1>
          <p>Sign in below</p>
        </div>
        <div>
          {errors.password && (
            <StyledError style={{ color: 'red' }}>{errors.password}</StyledError>
          )}
          {errors.username && (
            <StyledForm style={{ color: 'red' }}>{errors.username}</StyledForm>
          )}
          <div>
            <label>
              <input
                name="username"
                type="text"
                value={loginValue.username}
                onChange={changeHandler}
                placeholder="Username"
                />
            </label>
          </div>
          <div>
            <label>
              <input
                name="password"
                type="password"
                value={loginValue.password}
                onChange={changeHandler}
                placeholder="Password"
                />
            </label>
          </div>
          <button disabled={disabled}>Login</button>
        </div>
        <div>
        <p>No account?</p>
      <button onClick={() => push('/signup')}>Sign up!</button>
        </div>
        {props.apiError && <div style={{ color: 'red' }}>{props.apiError}</div>}
      </form>
    </StyledForm>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.user.isLoggedIn,
    apiError: state.user.error,
    userId: state.user.user.user_id,
  };
};

export default connect(mapStateToProps, { loginUser })(LoginForm);
