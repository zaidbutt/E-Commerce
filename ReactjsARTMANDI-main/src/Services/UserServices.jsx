import GenericServices from "./genericService";
import jwtDecode from "jwt-decode";
import { createContext } from "react";


const { UserIDContext } = createContext();

class UserServices extends GenericServices {
  constructor() {
    super();
  }

  login = (username, password) =>
    new Promise((resolve, reject) => {
      this.post("/login/", { username, password }).then((user_id) => {
        localStorage.setItem("user_id", user_id.user_id);
        resolve(user_id);
        console.log(user_id)
      });
    });

  register = (username, email, password, confirmPassword) =>
  new Promise((resolve, reject) => {
    this.post("/register/", { username, email, password, confirmPassword }).then((token) => {
      resolve(token);
    });
  });


  logout = () => {
    localStorage.removeItem("user_id", "");
  };

  addProduct = (title, description, image, category, start_price,created_by) =>
    this.post("/Listing/", {
      title,
      description,
      image,
      category,
      start_price,
      created_by,
    });

  isLoggedIn = () => {
    console.log(localStorage.getItem("user_id"));
    return localStorage.getItem("user_id") ? true : false;
  };
  getLoggedInUser = () => {
    try {
      const jwt = localStorage.getItem("token");
      return jwtDecode(jwt);
    } catch (ex) {
      return null;
    }
  };
}

let userServices = new UserServices();
export default userServices;
export { UserIDContext } ;