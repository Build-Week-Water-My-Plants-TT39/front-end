import React, {useState, useEffect} from 'react';
import axios from 'axios';
import * as yup from 'yup';
import loginFormSchema from '../utils/loginFormSchema';
import styled from 'styled-components'

//CSS Styling
const StyledForm = styled.div`
text-align: center;


h2{
  font-size: 3.2rem;
  border-bottom: 1px solid black;
  width: 75%;
  margin-right: auto;
  margin-left: auto;
}

p{
  margin-top: -2%;
  color: grey;
  font-size: 1.2rem;
}

form{
  background-color: #e6ebe7;
  border-radius: 25px 25px;
  width: 50%;
  height: 40vh;
  margin: 0 auto;
}

input{
  font-size: 1.2rem;
  margin: 0 5% 5% 1%;
}

button{
  font-size: 1.2rem;
  border-radius: 15px 15px;
  padding: 8px;
  background-color: #acc8af;
  border: 1px solid grey;

    &:hover{
      transform: scale(1.2);
      transition: 0.5s;
    }
}
`

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
    const {name, value} = e.target
    setLoginErrors(name, value)
    setLoginValue({...loginValue, [name]: value})
  };
  

  //Creating submit event
  const submitHandler = event => {
    event.preventDefault()
    // setLoginValue({ username:'', password:''})
    // const newUser = { username: loginValue.username.trim(), password: loginValue.password.trim() }
    //Axios Post
  }

  return (
    <StyledForm>
      <form onSubmit={submitHandler}>
        <div>
          <h2>User login</h2>
          <p>Sign in below</p>
        </div>
        <div>
        <div style={{color : 'red'}}>{errors.password}</div>
        <div style={{color : 'red'}}>{errors.username}</div>
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
        <div>
          <button>No account? Sign up!</button>
        </div>
      </form>
    </StyledForm>
  );
};

export default LoginForm;
