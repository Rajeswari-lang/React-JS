import React from 'react';
import { useState } from "react";
import FnnChild from './FnnChild';
function FnnParent() {
    const [value, setvalue] = useState('Sri');
    const tochange = (i)=>{
        setvalue(i);
    };
  return (
    <div>
      
      <FnnChild data1={tochange}/>
      
      <h1>Iam Parent : {value}</h1>
    </div>
  );
}

export default FnnParent;
