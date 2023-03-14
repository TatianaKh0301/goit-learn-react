import React, {Component} from "react";

export class Form extends Component {
    state = {
        name: '',
        surname: '',
    }

    handleChange = event =>{
        const { name, value} = event.currentTarget;
        this.setState({
          [name]: value,
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        this.reset();
      }
    
    reset = () => {
        this.setState({name: '', surname: ''})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>
                    Name 
                    <input 
                        type="text" 
                        name="name"
                        value={this.state.name} 
                        onChange={this.handleChange}/>
                </label>
                
                <label>
                    Surname 
                    <input 
                    type="text" 
                    name="surname"
                    value={this.state.surname} 
                    onChange={this.handleChange}/>
                </label>
  
                <button type="submit" style = {{width:"150px", height:"40px"}}>Submit</button>
            </form>
        );
    }
}