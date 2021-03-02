import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import loginFormSchema from '../utils/loginFormSchema';

//Creating initial login values
const initialLogin = {
  username: "",
  password: ""
}

const LoginForm = () => {

  //Setting State Hooks
  const [loginValue, setLoginValue] = useState(initialLogin);
  const [errors, setErrors] = useState(initialLogin);
  const [disabled, setDisabled] = useState(true);

  //Creating form Validty with Yup
  const setLoginErrors = (name, value) => {
    yup.reach(loginFormSchema, name).validate(value)
    .then(() => setErrors({...errors, [name]: '' }))
    .catch(err => setErrors({...errors, [name]: err.errors[0] }))
  };

  //Creating form Validty with Yup
  useEffect(() => {
    loginFormSchema.isValid(loginValue).then(valid => setDisabled(!valid))
  }, [loginValue])

  //Allowing target value to be changed
  const changeHandler = (e) => {
    const {name, value, type, checked} = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    setLoginErrors(name, valueToUse)
    setLoginValue({...loginValue, [name]: valueToUse})
  };

  //Creating submit event
  const submitHandler = event => {
    event.preventDefault()
    // const newUser = { username: loginValue.username.trim(), password: loginValue.password.trim() }
    //Axios Post
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <title> </title>
        <h2>User login</h2>
        <div>
            <label>
                <input
                name="username" 
                type="text"
                value={loginValue.username}
                onChange={changeHandler}
                placeholder="Username"
                />
                <div style={{color : 'red'}}>{errors.username}</div>
            </label>
            <label>
                <input
                name="password" 
                type="password"
                value={loginValue.password}
                onChange={changeHandler}
                placeholder="Password"
                />
                <div style={{color : 'red'}}>{errors.password}</div>
            </label>
                <button disabled={disabled}>Login</button>   
        </div>
        <div>
          <button>Sign up!</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
