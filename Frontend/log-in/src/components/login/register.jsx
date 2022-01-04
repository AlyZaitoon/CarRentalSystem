import React from "react";
import loginImg from "../../carrent.jpeg"


export class Register extends React.Component {
    constructor(props)
    {
        super(props);
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
                        <input type = "text" name= "name" placeholder="name"/>
                    </div>
                    <div className="form-group3">
                        Male<input type="radio" name="gender" value="male" /> 
                        Female<input type="radio" name="gender" value="female"/> 

                    </div>
                    <div className="form-group2">
                        <label htmlFor = "phone">Phone number</label>
                        <input type = "text" name= "phone" placeholder="phone"/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor = "birth_date">Birth date</label>
                        <input type = "date" name= "birth_date" placeholder="birth_date"/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor = "username">User iD</label>
                        <input type = "text" name= "username" placeholder="username"/>
                    </div>
                    <div className="form-group2">
                        <label htmlFor = "password">Password</label>
                        <input type = "password" name= "password" placeholder="password"/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type = "button" className="btn">
                    Register
                </button>
            </div>
        </div>
    }

}
