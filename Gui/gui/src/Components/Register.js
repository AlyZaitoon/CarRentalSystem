import React from "react"
import { Component } from "react";
import  loginImg  from "../carrent.jpeg";
import RegisterService from "../Services/RegisterService";
import Login from "./Login";
import Interface from "./LoginRegInterface";
import moment from 'moment'
import axios from 'axios'
class Register extends Component {
    constructor(props)
    {
        super(props);
        this.User={
            user_id:'',
            password:'',
            type:'customer'
        }
        this.Customer={
            customer_id:'',
            fname:'',
            sex:'',
            bdate:'',
            phone:''
        }
    }
    register()
    {   
        var Id=document.getElementById('ID').value.trim();
        var password=document.getElementById('password').value.trim();
        var bdate=document.getElementById('bdate').value.trim();
        var phone=document.getElementById('phone').value.trim();
        var fname=document.getElementById('fname').value.trim();
        var sex=0;
        var flagId=1,flagSex=1,flagPassword=1,flagPhone=1,flagFname=1,flagDate=1;

        if(fname==='')
        {
            flagFname=0;
            alert("Empty First Name field");
        }

        if (document.getElementById('radio1').checked) {
            sex = "M";
          }
        else if (document.getElementById('radio2').checked) {
            sex = "F";
        }
        else 
        {
            flagSex=0;
            alert("Please Enter ur gender");
        }
       
        if(phone=='')
        {
            flagPhone=0;
            alert("Empty Phone field");
        }
        if(!moment(bdate, 'YYYY-MM-DD',true).isValid() )
        {   flagDate=0;
            alert("Invalid Date");
        }

        if(isNaN(Id)||Id=='')
        {

            if(Id=='')
            alert("Empty User id field");
            else 
            alert("Wrong Entry");
            flagId=0;
        }
        
        if(password=='')
        {
            flagPassword=0;
            alert("Empty Password field");
        }
        // console.log(flagId);
        // console.log(flagSex);
        // console.log(flagPassword);
        // console.log(flagPhone);
        // console.log(flagFname);
        // console.log(flagDate);
        this.User.user_id=Id;
        this.User.password=password;
        
        
        this.Customer.customer_id=Id;
        this.Customer.fname=fname;
        this.Customer.sex=sex;
        this.Customer.bdate=bdate;
        this.Customer.phone=phone;
        
        
        
       

        // axios.post('https://jsonplaceholder.typicode.com/posts',this.User);

        if(flagId&&flagSex&&flagPassword&&flagPhone&&flagFname&&flagDate)
        {
            //neeeed to call back end to check duplicate entry
            RegisterService.registerUser(this.User)
            RegisterService.registerCustomer(this.Customer)
            window.Interface.changeState()

        }


    }
    render() {
        return <div className = "base-container" ref={this.props.containerRef}>
            <div className ="header">Register</div>
            <div className ="content">
                <div className = "image">
                    <img src={loginImg}/>
                </div>
                <div className = "form2">
                    <div className="form-group2">
                        <label htmlFor = "name">Name</label>
                        <input id="fname" type = "text" name= "name" placeholder="name"/>
                    </div>
                    <div className="formGender">
                        Male<input id="radio1" type="radio" name="gender" value="male" /> 
                        Female<input id="radio2"  type="radio" name="gender" value="female"/> 

                    </div>
                    <div className="form-group2">
                        <label htmlFor = "phone">Phone number</label>
                        <input id="phone" type = "text" name= "phone" placeholder="phone"/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor = "birth_date">Birth date</label>
                        <input id="bdate" type = "text" name= "birth_date" placeholder="YYYY-MM-DD"/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor = "username">User iD</label>
                        <input id="ID" type = "numeric" name= "username" placeholder="ID"/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor = "password">Password</label>
                        <input id="password" type = "password" name= "password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type = "button" className="btn1" onClick={()=>this.register() }>
                    Register
                </button>
            </div>
        </div>
    }

}

export default Register