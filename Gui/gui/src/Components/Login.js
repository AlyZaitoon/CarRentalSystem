import React, { Component } from "react";
import  loginImg  from "../carrent.jpeg";
import Reserve from "./Reserve";
import UserService from '../Services/LoginService'; 
import { DataViewDemo } from "./Search";
import Form from './Form';
import Header from "./Header";

class  Login extends Component
{   
    constructor(props){
        super(props)
        window.Login=this;
        this.state = {
            users:[],
            found:0
        }
        this.id=0;
    }
    componentDidMount(){
        UserService.getUsers().then((response) => {
            this.setState({ users: response.data})
        });
    }
    getUsers(){
        var users=this.state.users;
        var userId=document.getElementById("userId").value;
        if(isNaN(userId))
        {
            alert("Wrong Id");
            return
        }
        var password= document.getElementById("password").value;
        for (var i = 0; i < users.length; i++) {

            if(userId==users[i].user_id &&password==users[i].password)
            {   

                this.state.found=1;
                break;
            }
           
        }
        if(this.state.found==1)
        {   if(this.state.users[i].type=="admin")
            window.App.changePage(<Header/>);
            else 
            {   this.id= userId
                window.App.changePage(<DataViewDemo/>);
            }
           
            
        }
        
        //  <DataViewDemo/>
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
                            <input id="userId" type = "numeric" name= "username" placeholder="username"/>
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