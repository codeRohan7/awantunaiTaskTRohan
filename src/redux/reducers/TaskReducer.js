import * as types from '../actions/TaskActionConst'

export function demoReducer(state=[],action){

    let response = action.response;
    console.log(action,response);
    switch (action.type) {
        case types.GET_TASK:
            return {action }
            case types.GET_TASK_SUCCESS:
                return {response}
                case types.GET_TASK_ERROR:
                    return {response }
            
    
        default:
            return state;
    }
}
