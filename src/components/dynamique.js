
import React, {Component} from 'react';
class Dynamique extends Component{
    state={
        name:'',
    }
  
    
    render(){
        return(
           
            <>
                <input type='text' value ={this.state.name} onChange={e=>
                this.setState({name:e.target.value})}/>
                <h1>Bonjour, {this.state.name}</h1>
            </>          
        )
        
        
    }
}
export default Dynamique;

