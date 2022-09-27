// import React, { Component } from 'react';
// import ClassPropsUpdate from './component/ClassPropsUpdate'
// import FunctionPropsUpdate from './component/FunctionPropsUpdate'
//  class Parent extends Component {
//     constructor(props) {
//       super(props)
    
//       this.state = {
//          name:'Rajeswari'
//       }
//     }
//     changeName(item){
//         this.setState({name:item})
//     }
    
//   render() {
//     return (
//       <div>
//         <FunctionPropsUpdate data={
//             {
//                 name:this.state.name,changeName:this.changeName.bind(this)
//             }
//         }
//         name={this.state.name}/>
//       </div>
//     );
//   }
// }

// export default Parent;

import React, { useState } from 'react'
import Child from './child';
import child from "./child"
function Parent(){
  const [username,setUsername]=useState(" ");
  const nameHandler=(name)=>{
    setUsername(name);
  }
  return(
<div>
  <h1>Data from child to parent</h1>
<Child nameHandler={nameHandler}/>
<p>out:{username}</p>
</div>
  )
}
export default Parent;

