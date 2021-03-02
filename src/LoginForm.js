import React from 'react';

const LoginForm = () => {
  return (
    <div>
      <form>
        <title> </title>
        <h2></h2>
        <div>
          <label>
            <input name="username" type="text"></input>
          </label>
          <label>
            <input name="password" type="password"></input>
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
