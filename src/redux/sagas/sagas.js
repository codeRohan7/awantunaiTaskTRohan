import { fork, call, put, delay } from 'redux-saga/effects'
import * as types from '../actions/TaskActionConst'


export function* fetchAll() {
    console.log("test sagafun");
    let json = ""
    try {
        const json = yield call(() =>
        fetch("https://jsonplaceholder.typicode.com/photos")
          .then(response => response.json())
          .then(myJson => myJson)
      );
      console.log(json);
        yield put({type:types.GET_TASK_SUCCESS,json})
    } catch (error) {
        
    }
  }