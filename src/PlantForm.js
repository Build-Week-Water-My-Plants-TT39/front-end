import React, {useState} from 'react'
import {Route,Link,Switch} from 'react-dom-dom'
import styled from 'styled-components' 



export default function PlantForm(){


 return(
   <div>
    <form> 
       <div>
           <input>
            name="nickname"
            type="text"
            {/* value={}
            onChange={} */}
           </input>
        </div>
        <div>
            <input>
            name="species"
            type="text"
            {/* value={}
            onChange={} */}
            </input>
        </div>
        <div>
            <input>
            name="h20_frequency"
            type="number"
            {/* value={}
            onChange={} */}
            </input>
        </div>
    </form>
   </div>
 )



 
}