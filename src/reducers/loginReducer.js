import * as  actions from '../actions/actions';

const initialState = {
    loading:false,
    token: '',
    error: '',
    message: ''
}
const success = (state, action) => {
    return{
        token: action.token,
        message: action.message,
        loading: false,
        error: ''
    };
};
const failure = (state, action) => {
   return{ 
       token: '',
        loading: false,
        error: action.error
    }
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
             return success(state, action);
        case actions.LOGIN_FAIL:
            return failure(state, action);
        default:
            return state
    }
}