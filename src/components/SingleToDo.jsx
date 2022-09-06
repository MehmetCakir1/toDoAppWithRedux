import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleTodo } from "../redux/actions/toDoActions";
import { FaTrashAlt } from "react-icons/fa";
import { toastSuccessNotify } from "../helpers/toastify";

const SingleToDo = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({ id: id, completed: completed }));
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id));
    toastSuccessNotify("Item added successfully")
  };


  return (
    <div className={`${completed && "isDone"} single-todo d-flex justify-content-between align-items-center border-bottom border-dark`}>
      <div  className="todoText py-2 m-0 fs-5 text-part d-flex"> <div className="d-flex align-items-center">
        <input type="checkbox"  onClick={handleToggle} className="mx-1 me-2 "/>
      </div><p className="ps-1 m-0 ">{text}</p></div>
      <div>
        <span onClick={handleDelete} className="mx-2 fs-4 text-danger delete">
        <FaTrashAlt/>
        </span>
        </div>
    </div>
  );
};

export default SingleToDo;
