import React, { Component } from 'react';
 class Updateprops extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        name: props.name
     }
   }
   Click(){
    this.setState({
        name:"sravani"
    })
   }

    
  render() {
    return (
      <div>
        {this.state.name }

        <button onClick={()=>this.Click()}>click me</button>
      </div>
    )
  }
}

export default Updateprops;
