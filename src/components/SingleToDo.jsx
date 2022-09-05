import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteTodo, toggleTodo } from '../redux/actions/toDoActions';
// import okLogo from '../assets/ok.png';
// import deleteLogo from '../assets/delete.png';

const SingleToDo = ({ completed, text, id }) => {
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(toggleTodo({id:id,completed:completed}))
  };

  const handleDelete = () => {
    dispatch(deleteTodo(id))
  };

  const styled = {
    textDecoration: completed ? 'line-through' : 'none',
    backgroundColor: completed ? '#A9A9A9' : 'orange',
    borderRadius: '5px',
  };

  return (
    <div style={styled} className="todo-list">
      <h2 className="todoText">{text}</h2>
      <div>
        {/* <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            onClick={handleToggle}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={handleDelete}
          />
        </span> */}
        <span onClick={handleToggle}>toggle</span> <br /><br />
        <span  onClick={handleDelete}>delete</span>
      </div>
      <br />
    </div>
  );
};

export default SingleToDo;
