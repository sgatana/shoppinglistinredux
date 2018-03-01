import * as actions from '../actions/constants';

const initialState = {
    loading:false,
    token: '',
    error: '',
    message: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actions.LOGIN_START:
            return{
                 ...state,
                 error: '', 
                 loading:true
             }
        case actions.LOGIN_SUCCESS:
            return {
                // ...state,
                loading: false,
                // token: action.token,
                message: action.message,
                error: ''
            }
        case actions.LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state
    }
}