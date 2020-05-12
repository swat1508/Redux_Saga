import {all} from 'redux-saga/effects';
import {fetchUsers} from './userActions';

export function* rootSaga(){
    console.log('root-saga')
    yield all([
        fetchUsers()
    ]);
}
