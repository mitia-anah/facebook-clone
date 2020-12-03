import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './component/App'
import { GlobalContextProvider } from './component/FacebookContext'

ReactDOM.render(
    <GlobalContextProvider>
        <Router>
            <App />
        </Router>
    </GlobalContextProvider>
    ,
    document.getElementById('root')
);
