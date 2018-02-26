import * as actionTypes from './actions';
import axios from 'axios';

const URL = 'http://127.0.0.1:5000/v1';

export const loginUser =(data) => {
    return dispatch => {
        dispatch(loginStart())
    
    axios.post(`${URL}/login`, data)
    .then(response => {
        console.log(response)
        dispatch(loginSucces(response.data.message, response.data.token))
        // localStorage.setItem('token', " Bearer " +response.data.token)
    })
    .catch(error => {
        if(error.response){
            console.log(error.response)
            dispatch(loginFail(error.response.data.error))
        }
        else{
            dispatch(loginStart)
        }
        
    })
}
}

export const loginStart = () => {
    return{type: actionTypes.LOGIN_START,}
}


export const loginFail = (error) => {
    return{
        type: actionTypes.LOGIN_FAIL,
        error
        
    }
}
export const loginSucces = (message, token) => {
    return{
        type: actionTypes.LOGIN_SUCCESS,
        message,
        token
    }
}

// user registration

export const registerUser = (data) => {
    return dispatch => {
        axios.post(`${URL}/register`, data)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => {
            console.log(error.response)
        })
        
    }
}