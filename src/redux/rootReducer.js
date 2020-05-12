import {combineReducers} from 'redux';
import userReducer from './user/userReducer';

const rootReducer = combineReducers({
    
    myUser:userReducer

});

export default rootReducer;