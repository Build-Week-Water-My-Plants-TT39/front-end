import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import userFormSchema from "../utils/userFormSchema";
import * as yup from "yup";
import { connect } from "react-redux";
import { signUpUser } from "../actions/userActions";
import styled from "styled-components";
import { useTransition, animated } from "react-spring";

const StyledDiv = styled.div`
  margin: 5% 25%;
  width: 40%;
  padding: 5%;
  display: inline-block;
  background-image: url("https://tinyurl.com/yadytxp6");
  background-size: 100%;
  background-position: bottom-center;
  border-radius: 10%;

  .password-control {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    text-align: center;
    border-radius: 3em;
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0.5em;
    width: 20%;
    background-color: white;
    font-size: 1em;
    color: green;
    font-weight: bold;
  }

  span {
    color: ;
    font-size: 1.5rem;
    font-weight: bold;
    background-color: transparent;
    border-radius: 1em;
  }
`;

const initialState = {
  username: "",
  password: "",
  phone_number: "",
};

const initialErrors = {
  username: "",
  password: "",
  phone_number: "",
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
        setErrors({ ...errors, [inputName]: "" });
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
    const valueToUse = type === "checked" ? checked : value;
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
      push("/login");
    }
  }, [props.isSignedUp, push]);

  return (
    <StyledDiv>
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

      {/* <span>{errors.username}</span>

      <span>{errors.password}</span>

      <span>{errors.phone_number}</span> */}

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
