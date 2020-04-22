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
    <div className="container">
        <Router>
            <div className="col-md-6">
                <h1 className="text-center" style={style}>Library Management</h1>
                <Switch>
                    <Route path="/" exact component={ListBook} />
                    <Route path="/books" component={ListBook} />
                    <Route path="/add-book" component={AddBook} />
                    <Route path="/edit-book" component={EditBook} />
                </Switch>
            </div>
        </Router>
    </div>
);
}
const style = {
  color: 'red',
  margin: '10px'
}
export default App;
