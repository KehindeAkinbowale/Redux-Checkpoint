import { FILTER_CHECK } from "../actionTypes/setFilterChange";

export const FILTER_ACTION = (todoChecked) => {
   return {
      type: FILTER_CHECK,
      payload: todoChecked
   }
}