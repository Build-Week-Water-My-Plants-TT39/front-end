import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import userFormSchema from "../utils/userFormSchema";
import * as yup from "yup";
import { connect } from "react-redux";
import { signUpUser } from "../actions/userActions";
import styled from "styled-components";

const StyledDiv = styled.div`
  margin: 0 auto;
  width: 40%;
  padding: 5%;
  display: flex;
  justify-content: center;
  background-image: url("https://tinyurl.com/ycg4krmf");
  background-size: 100%;
  background-position: bottom-center;
  border-radius: 1em;

  .password-control {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  input {
    border-radius: 1em;
  }

  button {
    margin-top: 10px;
    margin-bottom: 10px;
    border-radius: 0.5em;
  }

  span {
    color: red;
    font-size: 1.2rem;
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
        </div>
        <div>
          <button>Submit</button>
        </div>
      </form>
      <div>
        <span>{errors.username}</span>
        <span>{errors.password}</span>
        <span>{errors.phone_number}</span>
        {props.apiError && <span>{props.apiError}</span>}
      </div>
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
