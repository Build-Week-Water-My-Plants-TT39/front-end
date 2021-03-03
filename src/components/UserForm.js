import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import userFormSchema from '../utils/userFormSchema';
import * as yup from 'yup';
import { connect } from 'react-redux';
import { signUpUser } from '../actions/userActions';

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
  }, [props.isSignedUp]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <input
            name="username"
            type="text"
            value={userFormValues.username}
            onChange={changeHandler}
            placeholder="Username"
          />
        </label>
        <label>
          <input
            name="password"
            type="password"
            value={userFormValues.password}
            onChange={changeHandler}
            placeholder="Password"
          />
        </label>
        <label>
          <input
            name="phone_number"
            type="text"
            value={userFormValues.phone_number}
            onChange={changeHandler}
            placeholder="Phone Number"
          />
        </label>
        <button>Submit</button>
      </form>
      <div>
        <span>{errors.username}</span>
        <span>{errors.password}</span>
        <span>{errors.phone_number}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isSignedUp: state.user.isSignedUp,
  };
};

export default connect(mapStateToProps, { signUpUser })(UserForm);
