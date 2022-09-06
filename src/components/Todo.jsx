import React from 'react'
import ToDoForm from './ToDoForm'
import ToDoList from "./ToDoList"
import { useDispatch, useSelector } from 'react-redux';
import { clearTodo } from '../redux/actions/toDoActions';
import { toastErrorNotify, toastSuccessNotify } from '../helpers/toastify';


const Todo = () => {
  const todoList = useSelector((state) => state.toDo.todoList);
  const dispatch = useDispatch();
  const handleClearList = () => {
    if(todoList.length>0){
          dispatch(clearTodo());
    toastSuccessNotify("All items removed successfully")
    }else{
      toastErrorNotify("No items to remove")
    }

  };
  // console.log(todoList)
  return (
    <div className='d-flex justidy-content-center align-items-center flex-column mt-sm-5 main-container border border-1 border-dark m-auto p-3'>
      <h2>TO-DO LIST</h2>
      <ToDoForm/>
      <ToDoList/>
      <div className="clear-wrapper mt-md-3">
        <button onClick={handleClearList} className="clear-button border-0 bg-danger text-light fw-bold py-1 px-5 rounded-3 fs-5">
          CLEAR ALL
        </button>
      </div>
    </div>
  )
}

export default Todo