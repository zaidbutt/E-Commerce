import React,{useState,Component,} from 'react'
import { Link } from 'react-router-dom';
import FOOTER from './footer';
import userServices from "../Services/UserServices";
import { Alert } from 'bootstrap';
import '../App.css';
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';


 function Signup (){

    const [username,setusername]=React.useState();
     const [email,setEmail]=React.useState();
    const[password,setpassword]=React.useState();
    const[confirmPassword,setconfirmPassword ]=React.useState();
 
    const checkvalidation=(e)=>{
            setconfirmPassword(e.target.value);
            if(password != confirmPassword){
                toast.error("Pasword not match with the confirm password, try again!");
            }
            }

    return (
        <div className="App"  style={{backgroundColor:"#D3D3D3"}}>
            <ToastContainer/>
        <div className="SignupForm"
            style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>
                <div>
            <form>
          

<div className="IMAGE"> 
<img src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg" 
style={{height:170,  width:250}}/>
</div>
<h3>Sign Up</h3>

    <div className="form-group">
        <label> Username</label>
        <input type="text" className="form-control" placeholder="User name"   value={username} onChange={e=>{
                        setusername(e.target.value)
                    }}/>
    </div>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" className="form-control" placeholder="Enter email"  value={email} onChange={e=>{
                        setEmail(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={e=>{
                        setpassword(e.target.value)
                    }} />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password again" value={confirmPassword} onChange={e=> checkvalidation(e)}/>
                </div>
                </form>
                <button  type="button" class="btn btn-primary" style={{marginBottom:'10px'}}
                onClick={e=>{
                    userServices.register(username, email, password, confirmPassword).then((data)=>{
                        console.log(data)
                        window.location.href="/"
                        alert("SINGUP SUCCESSFULLY")
                    }).catch(err=>{
                        console.log(err)
                    })
                   
                }} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered?
                     <Link to ='/login'>sign in</Link>
                </p>
            </div>
            

            </div>
           <FOOTER/>
        </div>
    )
}
export default Signup;