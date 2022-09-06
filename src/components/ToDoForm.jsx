import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { toastSuccessNotify, toastWarnNotify } from '../helpers/toastify';
import { addTodo } from '../redux/actions/toDoActions';

const ToDoForm = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text){
    dispatch(addTodo(text));
    setText('');
    toastSuccessNotify("New item added successfully")
    }else{
      toastWarnNotify("Please fill in the blank field")
    }
  };

  return (
    <form onSubmit={handleSubmit}className="todo-form d-flex justify-content-between align-items-center">
      <input
        className="todo-input py-1 me-1"
        type="text"
        placeholder="Add Todo"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button type="submit" className="add-button p-1 py-2 border-0 rounded-3 fw-bold">
        Add
      </button>
    </form>
  );
};

export default ToDoForm;
