import { useSelector } from 'react-redux';
import SingleToDo from './SingleToDo';

const ToDoList = () => {
  const todoList = useSelector((state) => state.toDo.todoList);
// console.log(todoList);


  return (
    <div className='toDoList mt-1 pt-2'>
      <div>
        {todoList.map((todo) => (
          <SingleToDo key={todo.id} {...todo} />
        ))}
      </div>
    </div>
  );
};

export default ToDoList;
