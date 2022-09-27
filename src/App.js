import React, { Component } from 'react'
import './App.css';


// import Updateprops from './component/Updateprops';
//  import UpdateFunction from './component/UpdateFunction';
//import FnnChild from './component/FnnChild';
import FnnParent from './component/FnnParent';
// import Child from './component/Hello1';
// import Parent from './component/Hello2';
// import Parent1 from './component/Hello2';
// import { Component } from 'react';

class App extends Component {
render() {
  return (
    <div className="App">
{/* <Updateprops name= "raji"/> */}
{/* <UpdateFunction name= "Sravani"/> */}
{/* <FnnChild/>

{/* <Parent/> */}
<FnnParent/> 
    </div>
  );
}
}

export default App;
