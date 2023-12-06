import React from 'react'
import { ListGroup } from "react-bootstrap";
import { TOGGLE_ACTION } from "../redux/store/actionFunctions/CheckedBoxAction";
import { useDispatch, useSelector } from "react-redux"
const ListTask = () => {
  const TodoList = useSelector((state) => state.todos);
  const filteredCheck = useSelector((state) => state.filter);
  const dispatch = useDispatch();
  return (
    <div className="d-flex">
        <ListGroup className="col-6">
        {
            TodoList.map((item) => {
            return (
                <ListGroup.Item key={item.id} className="w-75">
                <label htmlFor="id"> <span className="fw-bold">Task {item.id}</span></label>
                <div className="d-flex justify-content-between">
                    <label htmlFor="description">{item.description}</label>
                    <input type="checkbox" checked={item.isDone} onChange={() => dispatch(TOGGLE_ACTION(item.id))}/> 
                </div>
                </ListGroup.Item>                 
            )
            })
        }
        </ListGroup>
        <ListGroup className="col-6">
        <p className="lead fw-semibold">Done/Completed Task</p>
        {
            filteredCheck.map((item) => {
            return (
                <ListGroup.Item key={item.id} className="w-50">
                <label htmlFor="id"> <span className="fw-bold">Task {item.id}</span></label>
                <div className="d-flex justify-content-between">
                    <label htmlFor="description">{item.description}</label>   
                </div>
                </ListGroup.Item>                 
            )
            })
        }
        </ListGroup>
    </div>
  )
}
export default ListTask;