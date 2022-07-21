import { takeLatest } from "redux-saga/effects";
import {fetchAll} from './sagas'
import * as types from '../actions/TaskActionConst'

export default function* WatcherAuth(){
        yield takeLatest(types.GET_TASK,fetchAll)

    }
