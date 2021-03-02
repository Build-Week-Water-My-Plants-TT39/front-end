import React, {useState} from 'react'
import {Route,Link,Switch} from 'react-dom-dom'
import styled from 'styled-components' 



export default function UserForm(){


 return(
   <div>
    <form> 
    <label>
      <input>
         name="username" 
         type="text"
         {/* value={}
         onChange={} */}
         placeholder="Username"
      </input>
    </label>
    <label>
      <input>
         name="password" 
         type="password"
         value={}
         onChange={}
         placeholder="Password"
      </input>
    </label>
    <label>
      <input>
          name="phone_number"
          type="text"
          {/* value={}
          onChange={} */}
          placeholder="Phone Number"
      </input>
    </label>
    <button>Submit</button>
    </form>
   </div>
 )




}