import React, {useState} from 'react'
import {Route,Link,Switch} from 'react-dom-dom'
import styled from 'styled-components' 



export default function LoginForm(){


 return(
   <div>
    <form> 
        <title> </title>
        <h2></h2>
        <div>
            <label>
                <input>
                name="username" 
                type="text"
                {/* value={}
                onChange={} */}
                placeholder='Username'
                </input>
            </label>
            <label>
                <input>
                name="password" 
                type="password"
                {/* value={}
                onChange={} */}
                placeholder="Password"
                </input>
            </label>
                <button>Login</button>   
        </div>
        <div>
      <button>Sign up!</button>
        </div>
    </form>
   </div>
 )




}