import React, {useState, useEffect} from 'react';
import axios from 'axios';


const initialLogin = {
  username: "",
  password: ""
}

const LoginForm = () => {

  const [loginValue, setLoginValue] = useState(initialLogin);
  const [errors, setErrors] = useState(initialLogin);
  const [disabled, setDisabled] = useState(true);
  

  const changeHandler = (e) => {
    const {name, value, type, checked} = e.target
    const valueToUse = type === 'checkbox' ? checked : value
    setErrors(name, valueToUse)
    setLoginValue({...loginValue, [name]: valueToUse})
  };

  const submitHandler = event => {
    event.preventDefault()
    const newUser = { username: loginValue.username.trim(), password: loginValue.password.trim() }
    
  }

  return (
    <div>
      <form>
        <title> </title>
        <h2></h2>
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
            <label>
                <input
                name="password" 
                type="password"
                value={loginValue.password}
                onChange={changeHandler}
                placeholder="Password"
                />
            </label>
                <button>Login</button>   
        </div>
        <div>
          <button>Sign up!</button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
