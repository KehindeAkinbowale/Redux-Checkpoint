import { ADD_TODO } from "../actionTypes/addTodoTypes"

export const TODO_ACTION = (todoItem) => {
    return {
       type: ADD_TODO,
       payload: todoItem
    }
}


