import axios from 'axios';
import * as actions from './actions'
import { fetchList_Fail } from './actions';


// const URL = 'http://127.0.0.1:5000/v1';
const URL = 'https://shoppinglist-apis.herokuapp.com/v1';

let apiKey = localStorage.getItem('token')
const headers = {
    'Authorization': apiKey,
    'Content-Type': 'application/x-www-form-urlencoded'
}
// login action
export const loginUser =(data, callback) => {
    return dispatch => {
        dispatch(actions.loginStart())
    
        return axios.post(`${URL}/login`, data)
        .then(response => {
            localStorage.setItem('token', " Bearer " + response.data.token)
            dispatch(actions.loginSuccess(response.data.message))
        })
        .catch(error => {
            if(error.response){
                dispatch(actions.loginFail(error.response.data.error))
            }
            else{
                dispatch(actions.loginStart())
            }
            
        })
}
}


// user registration

export const registerUser = (data) => {
    return dispatch => {
        dispatch(actions.registerStart())
        return axios.post(`${URL}/register`, data)
        .then(response => {
            dispatch(actions.registerSuccess(response.data.message))
            console.log(response.data.message)
        })
        .catch(error => {
            if(error.response){
                dispatch(actions.registerFail(error.response.data.error))
            }
            else{
                dispatch(actions.registerStart())
            }
        })
        
    }
}

// fetch shoppinglist 

export const getShoppinglist = () => {
    return dispatch =>{
        dispatch(actions.fetchList())
        return axios.get(`${URL}/Shoppinglist`, {headers})
        .then(response => {
            dispatch(actions.fetchList_Success(response.data.shoppinglists))
        })
        .catch(error => {
            dispatch(fetchList_Fail(error.response.data.error))
            
            
        })
    }
}

// ADD SHOPPING LIST
export const ADDLIST = 'ADDLIST';
export const addList = (data, callback) => {
    const request = axios.post(`${URL}/Shoppinglist`, data,  {headers})
    .then( callback);

    return{
        type: ADDLIST,
        request,
        // callback
    }
}

export const logout = () => {
    return dispatch => {
        dispatch(actions.logout())
        localStorage.removeItem('token')
        localStorage.setItem('msg', 'you have been looged out, kindly log')
    }
}
