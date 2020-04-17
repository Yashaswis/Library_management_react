import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// import Appbar from './Appbar.js';
import AddBook from './components/AddBook';
import ListBook from './components/ListBook';
import EditBook from './components/EditBook';
function App() {
  return ( 
      <Router>  
        <div className="container">  
          <nav className="navbar navbar-expand-lg navheader">  
            <div className="collapse navbar-collapse" >  
              <ul className="navbar-nav mr-auto">  
                <li className="nav-item">  
                  <Link to={'/AddBook'} className="nav-link">AddBook</Link>  
                </li>  
                <li className="nav-item">  
                  <Link to={'/ListBook'} className="nav-link">Book List</Link>  
                </li>  
              </ul>  
            </div>  
          </nav> <br />  
          <Switch>  
            <Route exact path='/AddBook' component={AddBook} />  
            <Route path='/EditBook' component={EditBook} />  
            <Route path='/ListBook' component={ListBook} />  
          </Switch>  
        </div>  
      </Router>  
  );
}

export default App;
