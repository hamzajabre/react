import React, {Component} from 'react';
class Personne extends Component{
    state={
        name:'',
        age:''
    }
    render(){
        return(
            <>
            <input type='text' placeholder='name'value ={this.state.name} onChange={e=>
                this.setState({name:e.target.value})}/>
           <input type='text' placeholder='age'value ={this.state.age} onChange={e=>
                this.setState({age:e.target.value})}/>
                 <h1>{this.state.name} a {this.state.age } ans</h1>
           </>
        )
        
        
      
    }
}
export default Personne;