import React from 'react';
import { useState } from 'react';

function UpdateFunction(props) {
    const[name,setName]=useState(props.name)

 UpdateFunction=()=>{
setName("Raji")

}

return(

    <div>
     {name}
     <button onClick={UpdateFunction}>ClickMe</button>
    </div>
  );
}

export default UpdateFunction;
