import React, { useState } from 'react'
import Child from './child';
import child from "./child"
function Child(){
  const [username,setUsername]=useState(" ");
  const inputHandler=(e)=>{
    console.log(e);
    setUsername(e.target.value);
  }
  return(
<div>
  <label for="username">UserName</label>
  <input id="username" type="text" onInput={inputHandler}></input>
<button onClick={()=>{props.nameHandler(nameHandler)}}>Submit</button>
</div>
  )
}
export default Child;