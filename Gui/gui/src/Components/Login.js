import React, { Component } from "react";
import  loginImg  from "../carrent.jpeg";
import Reserve from "./Reserve";
import UserService from '../Services/LoginService'; 

class  Login extends Component
{   
    constructor(props){
        super(props)
        this.state = {
            users:[],
            found:0
        }
    }
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }
    getUsers(){
        var users=this.state.users;
        var username=document.getElementById("username").value;
        var password= document.getElementById("password").value;
        console.log(username);
        console.log( password);
        for (var i = 0; i < users.length; i++) {

            if(username==users[i].user_id &&password==users[i].password)
            {   

                this.state.found=1;
                
            }
           
        }
        console.log(this.state.found);
        if(this.state.found==1)
         window.App.changePage(<Reserve/>);
         else
         alert("Incorrect UserId or Password");

    }
    
    render(){
        return( 
            <div className = "base-container">
                <div className ="header">Login</div>
                <div className ="content">
                    <div className = "image">
                        <img src={loginImg}/>
                    </div>
                    <div className = "form">
                        <div className="form-group">
                            <label htmlFor = "username">User iD  </label>
                            <input id="username" type = "text" name= "username" placeholder="username"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor = "password">Password  </label>
                            <input id = "password" type = "password" name= "password" placeholder="password"/>
                        </div>
                    </div>
                </div>
                <div className="footer">
                    <button type = "button" className="btn1" background-color="#0000ff" onClick={()=>this.getUsers()}>
                        Login
                    </button>
                </div>
            </div>
            );
        }

    // componentDidMount() {
    //     //Add .right by default
    //     this.RightSide.classList.add("right");
    //   }
    //   changeState()
    //   {
    //     const {isLogginActive} = this.state;
    //     if(isLogginActive)
    //     {
    //       this.RightSide.classList.remove("right");
    //       this.RightSide.classList.add("left");
    //     }
    //     else
    //     {
    //       this.RightSide.classList.remove("left");
    //       this.RightSide.classList.add("right");
    //     }
    //     this.setState(prevState =>({isLogginActive : !prevState.isLogginActive}))
    //   }






}

export default Login