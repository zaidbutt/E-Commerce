import React,{useState,Component} from 'react'
import { Link } from 'react-router-dom'
import FOOTER from './footer';

import userServices from "../Services/UserServices";

 function Login () {

    const[Username,setUsername]=React.useState();
     const[Password,setPassword]=React.useState();
    
    return (   
        <div className='App'  style={{backgroundColor:"#D3D3D3"}}>      
          <div className="loginForm" 
        style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
        }} >        
           <form  method="post" autocomplete="off">
               <div className="IMAGE"> 
               <img src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg" style={{height:250,  width:250}}/>
               </div>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Username address</label>
                <input type="Username" className="form-control" placeholder="Enter Username" value={Username} onChange={e=>{
                        setUsername(e.target.value)
                    }}  />
            </div>
           
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={Password} onChange={
                        e=>{
                            setPassword(e.target.value)
                        }
                    } />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            
            
            <button type="submit" className="btn btn-primary btn-block" 
            
            onClick={e=>{
                    userServices.login(Username,Password).then((data)=>{
                        console.log(data)
                        alert("login successful")
                        window.location.href="/Home"
                    })
                    .catch(err=>{
                        // console.log(err)
                        alert("LOGIN FALIED")
                    })
                    
                }}
                >Login </button>
            <br></br>
            </form>
           

        </div>
        
        <FOOTER/>

</div>

    )
}
export default Login;