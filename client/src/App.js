import './App.css';
import HomePage from "./components/HomePage";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import UserPage from "./components/UserPage";
import {Switch, Route} from "react-router-dom";
import PotluckForm from "./components/PotluckForm";
import PrivateRoute from "./components/PrivateRoute";
import PotluckList from "./components/PotluckList";


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
        <PrivateRoute  path="/protected/create" component={PotluckForm}/>
        <PrivateRoute  path="/protected/events" components={PotluckList}/>

      </div>
  );
}

export default App;