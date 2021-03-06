import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import { FacebookContext } from './FacebookContext'

ReactDOM.render(
    <FacebookContext>
        <Router>
            <App />
        </Router>
    </FacebookContext>,
    document.getElementById('root')
);
