import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './App.css'


ReactDom.render(
   
        <App />
   ,
    document.getElementById('root')
);
registerServiceWorker();