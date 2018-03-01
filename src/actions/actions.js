import * as actions from './constants';

// login actions
export const loginStart = () => {
    return{
        type: actions.LOGIN_START,
    };
};

export const loginSuccess = (message) =>{
    return {
        type: actions.LOGIN_SUCCESS,
        message,
        // token
    };
};

export const loginFail = (error) => {
    return {
        type: actions.LOGIN_FAIL,
        error
    };
};


// register actions

export const registerStart = () => {
    return{
        type: actions.REGISTER_START,
    };
};

export const registerSuccess = (message) => {
    return {
        type: actions.REGISTER_SUCCESS,
        message,
    };
};

export const registerFail = (error) => {
    return {
        type: actions.REGISTER_FAIL,
        error
    };
};

// fetch shoppinglist

export const fetchList = () =>{
    return{
        type: actions.FETCHLIST_START,
    };
};

export const fetchList_Success = (shoppinglist) =>{
    return{
        type: actions.FETCHLIST_SUCCESS,
        shoppinglist
    };
};

export const fetchList_Fail = error =>{
    return {
        type: actions.FETCHLIST_FAIL,
        error
    }
}

// logout action
export const logout = (message) => {
    return{
        type: actions.LOGOUT
    }
}