import { ADD_TODO } from "./store/actionTypes/addTodoTypes"
import { FILTER_CHECK } from "./store/actionTypes/setFilterChange"
import { TOGGLE_CHECK } from "./store/actionTypes/toggleChecked"
import initialState from "../components/Task"

function nextTodoId(todos) {
    const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1)
    return maxId + 1
  }
const rootReducer =  (state = initialState, action) => {
 switch (action.type) {
    case ADD_TODO: 
    return {
       ...state,
       todos: [
        ...state.todos,
        {
          id: nextTodoId(state.todos),
          description: action.payload,
          isDone: false
        }
      ]
    }
    case TOGGLE_CHECK: {
      return {
        ...state,
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload) {
            return todo
          }
          return {
            ...todo,
            isDone: !todo.isDone
          }
        })
      }
    }
    case FILTER_CHECK: {
      return {
        ...state,
        filter: state.todos.filter((item) => (item.isDone === action.payload))
      }
    }
    default:  return state
 }
}
export default rootReducer