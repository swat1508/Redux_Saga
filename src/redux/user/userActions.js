import { FETCH_USERS_REQUEST,FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE } from "./userTypes";
import axios from 'axios';
import {takeLatest,takeEvery} from 'redux-saga/effects';
import {call,put} from 'redux-saga/effects';

export const fetchUsersRequest = () => {
    console.log('5. UserActions - fetchUsersRequest');
    return {
        type : FETCH_USERS_REQUEST
    }
}

export const fetchUsersSuccess = (users) => {
    console.log('8. UserActions - fetchUsersSuccess'); 
    return {
        type : FETCH_USERS_SUCCESS,
        payload: users
    }
}

export const fetchUsersFailure = (error) => {
    return {
        type : FETCH_USERS_FAILURE,
        payload:error
    }
}
/*
export const fetchUsers = () => {
    console.log('4. UserActions - fetchUsers');
    return (dispatch) => {
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {      
                console.log('7. UserActions - fetchUsers - then');          
                const users = response.data;
                dispatch(fetchUsersSuccess(users))
                console.log('10. UserActions - fetchUsers - then completed');  
            })
            .catch(error => {
                const errMsg = error.message;
                dispatch(fetchUsersFailure(errMsg));
            })
    }

} */
function* fetch_Users_Request(){
    try{
        const data = yield call(fetch,'https://jsonplaceholder.typicode.com/users');
        yield put({type:FETCH_USERS_SUCCESS,payload:data})
    }catch(error){
        yield put({type:FETCH_USERS_FAILURE,payload:error.message})
    }
}
export function* fetchUsers(){
    console.log('4. UserActions - fetchUsers');
    yield takeEvery(FETCH_USERS_REQUEST,fetch_Users_Request);
}
//export fetchUsers;