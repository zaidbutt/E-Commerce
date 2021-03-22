import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import HOME from './components/home';
import NAVBAR from './components/nav';
import LOGIN from './components/login';
import SIGNUP from './components/signup';
import SELLER from './components/Seller';
import BUYER from './components/buyer';
import CHATBOX from './components/chatbox';
import PRODUCT from './components/product';
import { BrowserRouter as Router, Switch, Route,Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

import "react-toastify/dist/ReactToastify.css";
import axios from 'axios';




function App() {
  return (
    
<Router>
<NAVBAR/>
   <Switch>
         
          <Route path="/" exact >
            <HOME/>
          </Route>
          <Route path="/CHATBOX" exact >
            <CHATBOX/>
          </Route>
          <Route path="/SELLER" exact >
            <SELLER/>
          </Route>
          <Route path="/BUYER" exact >
            <BUYER />
          </Route>
          <Route path="/LOGIN" exact >
            <LOGIN/>
          </Route>
          <Route path="/SIGNUP" exact >
            <SIGNUP />
          </Route>
          <Route path="/PRODUCT" exact>
            <PRODUCT/>
          </Route>
        </Switch> 

         
        
</Router> 
 
  )
}

export default App;
