import * as actionTypes from './actions';

export const start = () => {
    return { type: actionTypes.START, }
}


export const fail = (error) => {
    return {
        type: actionTypes.FAIL,
        error

    }
}
export const success = (message) => {
    return {
        type: actionTypes.SUCCESS,
        message,
     
    }
}
export const loginSuccess = (message, token) => {
    return{
        type: actionTypes.SUCCESS,
        message,
        token
    }
}