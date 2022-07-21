import {
    createStore,applyMiddleware
}from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index'
import rootSaga from './sagas'
const configureStore =()=>{
    const Sagamiddleware = createSagaMiddleware()
    return {
        ...createStore(rootReducer,applyMiddleware(Sagamiddleware)),
        runSaga : Sagamiddleware.run(rootSaga)
    }
}
export default configureStore;
