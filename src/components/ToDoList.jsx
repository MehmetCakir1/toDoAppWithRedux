import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { clearTodo } from '../redux/actions/toDoActions';
import SingleToDo from './SingleToDo';

const ToDoList = () => {
  const dispatch = useDispatch();
  const todoList = useSelector((state) => state.toDo.todoList);
// console.log(todoList);
  const handleClearList = () => {
    dispatch(clearTodo());
  };

  return (
    <div>
      <div>
        {todoList.map((todo) => (
          <SingleToDo key={todo.id} {...todo} />
        ))}
      </div>
      <div className="clear-wrapper">
        <button onClick={handleClearList} className="clear-button">
          Clear
        </button>
      </div>
    </div>
  );
};

export default ToDoList;
