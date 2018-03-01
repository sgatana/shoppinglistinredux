import * as actionTypes from '../actions/constants';
const initialState = {
    message: '',
    loading: false,
    error: ''
}

const registerUser = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.REGISTER_START:
            return{
                ...state,
                loading: true,
                message:'',
                error:''
            }
        case actionTypes.REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message,
                error: ''
            }
        case actionTypes.REGISTER_FAIL:
        return{
            ...state,
            loading: false,
            error: action.error,
            message:''
        }
    
        default:
            return state

    }
}

export default registerUser