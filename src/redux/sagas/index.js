import { fork } from 'redux-saga/effects'

import WatcherAuth from './watchers'
export default function* startForman(){
    yield fork(WatcherAuth)
}