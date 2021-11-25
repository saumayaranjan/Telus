
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './Components/Header/Header';
import DashBoard from './Components/Dashboard/Dashboard';
import LoginPage from "./Components/Login/LoginPage";
import Cart from './Components/Header/Cart/Cart'
import Charts from './Components/Charts/Charts'

import {BrowserRouter as Router,Switch,Route,Redirect} from "react-router-dom"

function App() {
  return (
   <>
   <Router>

     <Switch>
        <Route exact path="/Login">
          <LoginPage/>
        </Route>
        <Route exact path="/DashBaord">
         <DashBoard/>
        </Route>
        <Route exact path="/Cart">
          <Cart/>
        </Route>
        <Route exact path="/Charts">
          <Charts/>
        </Route>
       <Route path="/">
           <Redirect to="Login"/>
       </Route>
     </Switch>
   </Router>

   </>
  );
}

export default App;
