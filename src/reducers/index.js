import { combineReducers } from 'redux';
import loginReducer from './loginReducer';
import signupReducer from './signupReducer';
import shoppinglist from './shoppinglistReducer';
const rootReducer = combineReducers({
    loginReducer,
    signupReducer,
    shoppinglist
})
export default rootReducer;