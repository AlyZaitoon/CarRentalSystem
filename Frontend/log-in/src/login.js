import React from "react";
import App from "./App";

class LX extends React.Component{
    
    state={
        email:'',
        pwd:''
    }
    
    handleChange = (e) =>{
        const {name,value} = e.target                     //extract email and password
        this.setState({[name]:value})
    }

    handleSubmit = (e) =>{
        e.preventDefault()

    }

    render(){
        return(
            <div>
                <form onSubmit = {this.handleSubmit}>
                    <input type = 'email' name = 'email' placeholder = 'email...' required onChange = {this.handleChange}/>
                    <input type = 'password' name = 'pwd' placeholder= 'password...' required onChange = {this.handleChange}/>
                    <button onSubmit = {this.handleSubmit}>Log in</button>
                </form>
            </div>
        )
    }
}
export default Login;