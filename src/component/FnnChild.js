import React from 'react';
import { useState } from 'react'
function FnnChild(props) {
    const[data,setvalue]=useState('Raji')
  
  return (
    <div>
      <button onClick={()=>props.data1(data)}>Change Value1</button>
      {props.value}
    </div>
  );

}

export default FnnChild;
