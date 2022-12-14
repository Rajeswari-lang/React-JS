import React from 'react';
import Child from './components/child';

class App extends React.Component{
      
       state = {
        name: "",
       }
  
    handleCallback = (childData) =>{
        this.setState({name: childData})
    }
  
    render(){
        const {name} = this.state;
        return(
            <div>
                <Child parentCallback = {this.handleCallback}/>
                {name}
            </div>
        )
    }
}
export default App;