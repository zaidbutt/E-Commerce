import GenericServices from './genericService'
import jwtDecode from 'jwt-decode'


class UserServices extends GenericServices{
    constructor(){
        super();
    }

    login=(Username,Password)=>new Promise((resolve,reject)=>{
        this.post("api/auth/token/login/",{Username,Password}).then((token)=>{
            console.log(token)
            localStorage.setItem("token",token);
            console.warn({token});
            resolve(token);
        })
    })

    register=(username,email,password)=>this.post("/User/?format=api",{username,email,password});
    logout=()=>{
        localStorage.removeItem("token","")
    }

    addProduct=(title,description,image,category,start_price)=>this.post("/Listing/?format=api",{title,description,image,category,start_price});


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