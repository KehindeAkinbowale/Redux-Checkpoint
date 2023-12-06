import { TOGGLE_CHECK } from "../actionTypes/toggleChecked"
export const TOGGLE_ACTION = (todoId) => {
    return {
        type: TOGGLE_CHECK,
        payload: todoId
    }
}