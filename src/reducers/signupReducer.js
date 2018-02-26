import * as actionTypes from '../actions/actions';
const initialState = {
    message: '',
    loading: false,
    error: ''
}

const registerUser = (state = initialState, action) =>{
    switch (action.type) {
        case actionTypes.START:
            return{
                ...state,
                loading: true
            }
        case actionTypes.SUCCESS:
            return {
                ...state,
                loading: false,
                message: action.message
            }
        case actionTypes.FAIL:
        return{
            ...state,
            loading: false,
            error: action.error
        }
    
        default:
            return state

    }
}

export default registerUser