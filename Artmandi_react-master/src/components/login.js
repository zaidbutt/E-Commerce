import React,{useState,Component} from 'react'
import { Link } from 'react-router-dom'
import FOOTER from './footer';

import userServices from "../Services/UserServices";


 const Login = () => {
     const [username,setUsername]=React.useState();
     const [password,setPassword]=React.useState();
     return ( 
     <div className="App"  style={{backgroundColor:"#D3D3D3"}}>
    
    <div className="LoginForm"
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
 <input type="text" className="form-control" placeholder="User name"  onChange={e=>{
                 setUsername(e.target.value)
             }}/>
</div>

         

         <div className="form-group">
             <label>Password</label>
             <input type="password" className="form-control" placeholder="Enter password" onChange={e=>{
                 setPassword(e.target.value)
             }} />
         </div>
         </form>
         <button type="button" class="btn btn-primary" style={{marginBottom:'10px'}} onClick={e=>{
             userServices.login(username,password).then((data)=>{
                 console.log(data)
                 window.location = "/";
             }).catch((err)=>{
                 console.log(err)
             })
         }}>Login</button>
         <p className="forgot-password text-right">
                   Create an account?
                     <Link to ='/signup'>sign up</Link>
                </p>
                </div>
                </div>
           <FOOTER/>
        </div> );
 }
  
 export default Login;