import React,{useState,Component} from 'react'
import { Link } from 'react-router-dom';
import FOOTER from './footer';
import userServices from "../Services/UserServices";


 function Signup (){
    const [username,setusername]=React.useState();
     const [email,setEmail]=React.useState();
   

    return (
        <div className="App"  style={{backgroundColor:"#D3D3D3"}}>
        <div className="SignupForm"
            style={{display: "flex",
            justifyContent: "center",
            alignItems: "center",
            }}>
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
                    <input type="password" className="form-control" placeholder="Enter password" />
                </div>

                <div className="form-group">
                    <label>Confirm Password</label>
                    <input type="password" className="form-control" placeholder="Enter password again" />
                </div>

                <button type="submit" className="btn btn-primary btn-block" onClick={e=>{
                    userServices.register(username,email).then((data)=>{
                        console.log(data)
                        window.location.href="/login"
                    }).catch(err=>{
                        console.log(err)
                    })
                   
                }} >Sign Up</button>
                <p className="forgot-password text-right">
                    Already registered
                     {/* <Link to ='/login'>sign in?</Link> */}
                </p>
            </form>
            

            </div>
           <FOOTER/>
        </div>
    )
}
export default Signup;