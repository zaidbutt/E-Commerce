import GenericServices from './genericService'
import jwtDecode from 'jwt-decode'


class UserServices extends GenericServices{
    constructor(){
        super();
    }

    login=(email,password)=>new Promise((resolve,reject)=>{
        this.post("/buyer/loginBuyer",{email,password}).then((token)=>{
            localStorage.setItem("token",token);
            resolve(token);
        })
    })

    register=(username,email,password)=>this.post("/User/?format=api",{username,email, password});
    logout=()=>{
        localStorage.removeItem("token","")
    }

    isLoggedIn=()=>{
        return localStorage.getItem("token") ? true : false
    }
    getLoggedInUser=()=>{
        try{
            const jwt=localStorage.getItem("token")
            return jwtDecode(jwt);
        }
        catch(ex){
            return null
        }
    }
}

let userServices = new UserServices;
export default userServices;