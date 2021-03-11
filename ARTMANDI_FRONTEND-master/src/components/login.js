import React from 'react'
import { Link } from 'react-router-dom'
import FOOTER from './footer';

 function login() {
    return (   
        <div className='App'  style={{backgroundColor:"#D3D3D3"}}>      
          <div className="loginForm" 
        style={{display: "flex",
        justifyContent: "center",
        alignItems: "center",
       
        }} >        
           <form>
               <div className="IMAGE"> 
               <img src="https://raw.githubusercontent.com/ipenywis/react-login-register/e00bd4637183df94e54c8a19a80b5262834da8f7/src/login.svg" style={{height:250,  width:250}}/>
               </div>
            <h3>Sign In</h3>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" />
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" />
            </div>

            <div className="form-group">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" id="customCheck1" />
                    <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
            </div>
            
            
            <button type="submit" className="btn btn-primary btn-block" onClick={e=>{window.location.href='./'}}>Login </button>
            <br></br>
            </form>
           

        </div>
        
        <FOOTER/>

</div>

    )
}
export default login;