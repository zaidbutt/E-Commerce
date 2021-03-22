import GenericServices from "./genericService";
import jwtDecode from "jwt-decode";

class UserServices extends GenericServices {
  constructor() {
    super();
  }

  login = (username, password) =>
    new Promise((resolve, reject) => {
      this.post("/login/", { username, password }).then((token) => {
        localStorage.setItem("token", token.token);
        resolve(token);
      });
    });

  register = (username, email, password, confirmPassword) =>
  new Promise((resolve, reject) => {
    this.post("/register/", { username, email, password, confirmPassword }).then((token) => {
      // localStorage.setItem("token", token.token);
      resolve(token);
    });
  });
  logout = () => {
    localStorage.removeItem("token", "");
  };

  addProduct = (title, description, image, category, start_price) =>
    this.post("/Listing/?format=api", {
      title,
      description,
      image,
      category,
      start_price,
    });

  isLoggedIn = () => {
    console.log(localStorage.getItem("token"));
    return localStorage.getItem("token") ? true : false;
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
