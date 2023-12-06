import { useState } from "react";
import { TODO_ACTION } from "./components/AddTask";
import { useDispatch} from "react-redux"
import { FILTER_ACTION } from "./redux/store/actionFunctions/setFilterAction";
import ListTask from "./components/ListTask";
function App() {
  const [inputText, setInputText] = useState("");
  const dispatch = useDispatch();
  return (
    <>
    <h1 className="display-4">Welcome to Redux checkpoint</h1>
    <p className="display-5">My Todo App</p>
     <div className="d-flex mb-4">
     <input type="text" className="form-control w-25 me-3" value={inputText} onChange={(e) => setInputText(e.target.value)} />
     <button className="btn btn-primary" onClick={() => dispatch(TODO_ACTION(inputText))}>Add Todo</button>
     </div>
     <ListTask />
   <button className="btn btn-success mt-3" onClick={() => dispatch(FILTER_ACTION(true))}>Filter by Checked</button>
    </>    
  )
}

export default App
