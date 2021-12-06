import Header from './components/Header'
import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import Employeelist from './components/Employeelist';
import Employeedetails from './components/Employeedetails';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './components/cssstyle.css'
function App() {
  return (
    <div className="App">
      
      <Router>
      <Header/>
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/contact">
            <Contact></Contact>
          </Route>
          <Route exact path="/Employeelist">
            <Employeelist/>
          </Route>
          <Route exact path="/Employeelist/:id">
            <Employeedetails/>
          </Route>
          
         
         
        </Switch>
      </Router>
       
      
    </div>
  );
}
export default App;