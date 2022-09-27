import React, { Component } from 'react';

class ClassPropsUpdate extends Component {
    constructor(props) {
      super(props)
this.state = {
         name:this.props.name
      }
    }
    handleclick=()=>{
        this.setState({
            name:'Rajeswari'
        })
    }
  render() {
    return (
      <div>
        <h2>Parent to child:{this.state.name}</h2>
        <button onClick={this.handleClick}>ClickMe</button>
        <h3>Child to Parent:{this.props.data.name}</h3>
        <button onClick={()=>this.props.data.changeName(this.state.name)}>Submit</button>
      </div>
    );
  }
}

export default ClassPropsUpdate;
