import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import EditBook from './components/EditBook';

ReactDOM.render(<EditBook />, document.getElementById('root'));
serviceWorker.unregister(); 