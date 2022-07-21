import{
    GET_TASK
} from './TaskActionConst'
export const getTaskAction = ()=>{
    const type = GET_TASK;
    return{type}
}