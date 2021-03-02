import React, {useState} from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import styled from 'styled-components' 



export default function UserForm(){


 return(
   <div>
    <form> 
    <label>
      <input
         name="username" 
         type="text"
        //  {/* value={}
        //  onChange={} */}
         placeholder="Username"
      />
    </label>
    <label>
      <input
         name="password" 
         type="password"
        //  value={}
        //  onChange={}
         placeholder="Password"
      />
    </label>
    <label>
      <input
          name="phone_number"
          type="text"
        //   {/* value={}
        //   onChange={} */}
          placeholder="Phone Number"
      />
    </label>
    <button>Submit</button>
    </form>
   </div>
 )




}