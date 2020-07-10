import React from "react";
import loginImg from "../imgs/login.svg";
import "./style.scss";


const Register = ()=>{
    
    
        return (
        <div className="base-container" >
            <form >
            <div className="header">Register</div>
            <div className="content">
                <div className="image">
                    <img src={loginImg} />
                </div>
                <div className="form">
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input type="text" name="username" placeholder="Username "/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="Your Email"/>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="Your Password "/>
                    </div>
                </div>
            </div>
            <div className="footer">
                <button type="submit" className="btn">Register</button>
            </div>
            </form>
        </div>);
    
}
export default Register;