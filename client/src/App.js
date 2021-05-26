import './App.css';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import {Switch, Route} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div>
        <Switch>
            <PrivateRoute path="/protected" component={UserPage}/>
             
            <Route path="/login">
              <Login/>
            </Route>
            <Route path="/sign-up">
              <SignUp/>
            </Route>
            <Route path="/">
              <HomePage/>
            </Route>
        </Switch>
      </div>
  );
}

export default App;