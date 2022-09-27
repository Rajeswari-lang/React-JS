import React, { useState } from 'react';
import Child from './Hello1';
//import Child from './Hello1';

function Parent(){
  const [data,setData] = useState(0)
 
  const handleClick = (number) =>{
console.log(number)
  }
  return (
    <div>
      <Child handleclick={handleClick}/>
      {data}
    </div>
  )
}

export default Parent;

