import * as actionTypes from '../actions/constants';


const initialState = {
    shoppinglist: '',
    loading: false,
    error: ''
}

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCHLIST_START:
            return {
                ...state,
                loading: true,
                
            };
        case actionTypes.FETCHLIST_SUCCESS:
            return {
                ...state,
                loading: false,
                shoppinglist: action.shoppinglist,
                
            }
        case actionTypes.FETCHLIST_FAIL:
            return{
                ...state,
                loading: false,
                error: action.error,
                shoppinglist: ''
            }
    
        default:
            return state;
    }
}