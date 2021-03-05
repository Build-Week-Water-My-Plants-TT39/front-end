import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import userFormSchema from '../utils/userFormSchema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/userActions';
import styled from 'styled-components';

const StyledDiv = styled.div`
  margin: 8% 22%;
  width: 50%;
  padding: 5%;
  display: inline-block;
  background-image: url('https://tinyurl.com/y8mhthym');
  background-size: 80%;
  background-position: center;
  border-radius: 2em;
  height: 40vh;
  box-shadow: 7px 7px 5px 5px #e6e4cf;
  border: 1px solid #e6e4cf;
  font-family: 'Shippori Mincho B1', serif;

  .password-control {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    text-align: center;
    border-radius: 2em;
    margin-top: 10px;
    margin-bottom: 20px;
    padding: 1.5%;
    font-size: 1em;
    background-image: url('https://tinyurl.com/y8mhthym');
    background-size: 0.2%;
    color: green;
    font-weight: bold;
    margin: 2.5% 33%;
    border: green solid 2px;
    box-shadow: 7px 7px;
    outline: none;
  }

  button {
    border-radius: 0.5em;
    width: 20%;
    margin: 9% 36%;
    background-image: url('https://tinyurl.com/y8mhthym');
    background-size: 0.2%;
    font-size: 2em;
    padding: 5;
    color: green;
    font-weight: bold;
    text-align: center;
    border: green solid 2px;
    box-shadow: 7px 7px;

    &:hover {
      transform: scale(1.3);
      transition: 1s;
    }
  }

  span {
    color: green;
    font-size: 1rem;
    font-weight: bold;
    background-color: transparent;
    margin: 0 -32%;
  }

  h1 {
    margin: -9% 25%;
    padding: 6%;
    margin-bottom: -5%;
    font-weight: bold;
    color: green;
  }
`;

const initialState = {
  username: '',
  password: '',
  phone_number: '',
};

const initialErrors = {
  username: '',
  password: '',
  phone_number: '',
};

const UserForm = (props) => {
  const [userFormValues, setUserFormValues] = useState(initialState);
  const [errors, setErrors] = useState(initialErrors);
  const { push } = useHistory();

  const validate = (inputName, inputValue) => {
    yup
      .reach(userFormSchema, inputName)
      .validate(inputValue)
      .then(() => {
        setErrors({ ...errors, [inputName]: '' });
      })
      .catch((err) => {
        setErrors({ ...errors, [inputName]: err.errors[0] });
      });
  };

  const postNewUser = (newUser) => {
    props.signUpUser(newUser);
    setUserFormValues(initialState);
  };

  const changeHandler = (e) => {
    const { name, type, value, checked } = e.target;
    const valueToUse = type === 'checked' ? checked : value;
    validate(name, valueToUse);
    setUserFormValues({
      ...userFormValues,
      [name]: valueToUse,
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const userObj = {
      username: userFormValues.username.trim(),
      password: userFormValues.password.trim(),
      phone_number: userFormValues.phone_number.trim(),
    };
    postNewUser(userObj);
  };

  useEffect(() => {
    if (props.isSignedUp) {
      push('/login');
    }
  }, [props.isSignedUp, push]);

  return (
    <StyledDiv>
      <h1>🌿🌿Sign up!🌿🌿</h1>
      <form onSubmit={submitHandler}>
        <div>
          <input
            className="username-control"
            name="username"
            type="text"
            value={userFormValues.username}
            onChange={changeHandler}
            placeholder="Username"
          />
          <span>{errors.username}</span>
        </div>
        <div>
          <input
            className="password-control"
            name="password"
            type="password"
            value={userFormValues.password}
            onChange={changeHandler}
            placeholder="Password"
          />
          <span>{errors.password}</span>
        </div>
        <div>
          <input
            className="phone_number-control"
            name="phone_number"
            type="text"
            value={userFormValues.phone_number}
            onChange={changeHandler}
            placeholder="Phone Number"
          />
          <span> {errors.phone_number}</span>
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>

      <div> {props.apiError && <span>{props.apiError}</span>}</div>
    </StyledDiv>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedUp: state.user.isSignedUp,
    apiError: state.user.error,
  };
};

export default connect(mapStateToProps, { signUpUser })(UserForm);
