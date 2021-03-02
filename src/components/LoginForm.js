import React from 'react';

const LoginForm = () => {
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
                // {/* value={}
                // onChange={} */}
                placeholder='Username'
                />
            </label>
            <label>
                <input
                name="password" 
                type="password"
                // {/* value={}
                // onChange={} */}
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
