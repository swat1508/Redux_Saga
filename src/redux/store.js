import {createStore,applyMiddleware} from 'redux';
import thunk from 'redux-thunk'; //thunk
import rootReducer from './rootReducer';
import logger from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import {fetchUsers} from './user/userActions';
import {rootSaga} from './user/saga';
import { apply } from 'redux-saga/effects';
const sagaMiddleware = createSagaMiddleware();

const createStoreWithMiddleware = applyMiddleware(sagaMiddleware)(createStore);
export const store = createStoreWithMiddleware(rootReducer);

//const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)));
// const store = createStore(
//                 rootReducer,
//             //    composeWithDevTools(applyMiddleware(logger,thunk))   //new- thunk added
//                      applyMiddleware(logger,sagaMiddleware)   //new- saga added
//                 ); 

// export default store;
sagaMiddleware.run(rootSaga);
