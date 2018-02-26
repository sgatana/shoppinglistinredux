import axios from 'axios';
import * as alerts from './alertActions';
// import { history } from '../helpers/history';

const URL = 'http://127.0.0.1:5000/v1';

export const loginUser =(data) => {
    return dispatch => {
        dispatch(alerts.start())
    
        axios.post(`${URL}/login`, data)
        .then(response => {
            console.log(response)
            dispatch(alerts.loginSuccess(response.data.message, response.data.token))
            localStorage.setItem('token', " Bearer " +response.data.token)
        })
        .catch(error => {
            if(error.response){
                console.log(error.response)
                dispatch(alerts.fail(error.response.data.error))
            }
            else{
                dispatch(alerts.start)
            }
            
        })
}
}


// user registration

export const registerUser = (data) => {
    return dispatch => {
        dispatch(alerts.start())
        axios.post(`${URL}/register`, data)
        .then(response => {
            // history.push('/')
            dispatch(alerts.success(response.data.message))
            console.log(response.data.message)
            // console.log(history)
        })
        .catch(error => {
            if(error.response){
                dispatch(alerts.fail(error.response.data.error))
                console.log(error.response)
            }
            else{
                dispatch(alerts.start)
            }
        })
        
    }
}