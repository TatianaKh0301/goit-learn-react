import React, {Component} from "react";
import shortid from "shortid";

export class Form extends Component {
    state = {
        name: '',
        surname: '',
        experience: 'junior',
        licence: false,
    }

    nameInputId = shortid.generate();
    surnameInputId = shortid.generate();

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
    
    handleLicenceChange = event => {
        console.log(event.currentTarget.checked);

        this.setState({ licence: event.currentTarget.checked});
    }

    reset = () => {
        this.setState({name: '', surname: ''})
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor={this.nameInputId}>
                    Name 
                    <input 
                        type="text" 
                        name="name"
                        value={this.state.name} 
                        onChange={this.handleChange}
                        id={this.nameInputId}/>
                </label>
                
                <label htmlFor={this.surnameInputId}>
                    Surname 
                    <input 
                    type="text" 
                    name="surname"
                    value={this.state.surname} 
                    onChange={this.handleChange}
                    id={this.surnameInputId}/>
                </label>

                <p>Level:</p>
                <label>
                    <input 
                        type="radio" 
                        name="experience" 
                        value="junior" 
                        onChange={this.handleChange}
                        checked={this.state.experience === 'junior'}/> Junior
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="experience" 
                        value="middle" 
                        onChange={this.handleChange}
                        checked={this.state.experience === 'middle'}/> Middle
                </label>
                <label>
                    <input 
                        type="radio" 
                        name="experience" 
                        value="senior" 
                        onChange={this.handleChange}
                        checked={this.state.experience === 'senior'}/> Senior
                </label>
                <br />                
                <label>
                    <input 
                        type="checkbox" 
                        name="licence"
                        checked={this.state.licence}
                        onChange={this.handleLicenceChange}/> Agree with conditions
                </label>
                <button type="submit" disabled = {!this.state.licence} style = {{width:"150px", height:"40px"}}>Submit</button>
            </form>
        );
    }
}