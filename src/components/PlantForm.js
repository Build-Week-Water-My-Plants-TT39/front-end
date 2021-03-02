import React, {useState} from 'react'
import {Route,Link,Switch} from 'react-router-dom'
import styled from 'styled-components' 



export default function PlantForm(){


 return(
   <div>
    <form> 
       <div>
           <label> 
               Nickname
           <input
            name="nickname"
            type="text"
            // {/* value={}
        // onChange={} */}
           placeholder="Nickname"
        />
        </label>
        </div>
        <div>
            <label>
                Species
            <input
            name="species"
            type="text"
            // {/* value={}nb 
        // onChange={} */}
            placeholder="Species"
        />
        </label>
        </div>
        <div>
            <label>
                H2o Frequency
            <input
            name="h20Frequency"
            type="string"
            // {/* value={}
        // onChange={} */}
            placeholder="H2o Frequency"
        />
        </label>
        </div>
    </form>
   </div>
 )



 
}