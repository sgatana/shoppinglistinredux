import React from 'react';
import ReactDom from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import Login from './components/Login';
import Register from './components/register';
import Dashboard from './components/Dashboard'
import './App.css'
import {BrowserRouter, Route, Switch } from 'react-router-dom';
import {createStore,  applyMiddleware, compose } from 'redux';
import rootReducer from './reducers/index'
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleWare  = composeEnhancers(applyMiddleware(thunk))(createStore);
let store = createStoreWithMiddleWare(rootReducer)

ReactDom.render(
        <Provider store ={store}>
            <BrowserRouter>
            <Switch>
                    <Route exact path='/' component={Login} />
                    <Route path='/dashboard' component={Dashboard} />
                    <Route path='/register' component={Register} />
            </Switch>
            </BrowserRouter>
        </Provider>
   ,
    document.getElementById('root')
);
registerServiceWorker();