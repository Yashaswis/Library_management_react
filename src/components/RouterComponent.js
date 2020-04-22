import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddBook from './AddBook';
import ListBook from './ListBook';
import EditBook from './EditBook';

const RouterComponent =() => {
  return (
    <div style={style}>
        <Router>
                <Switch>
                    <Route path="/" exact component={ListBook} />
                    <Route path="/books" component={ListBook} />
                    <Route path="/add-book" component={AddBook} />
                    <Route path="/edit-book" component={EditBook} />
                </Switch>
        </Router>
    </div>
);
}
const style = {
  color: 'red',
  marginTop: '20px'
}
export default RouterComponent;