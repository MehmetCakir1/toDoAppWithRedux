import {
  ADD_TODO,
  CLEAR_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
} from "../types/toDoTypes";

let initialState = {
  todoList: [
    { id: new Date().getTime(), text: "Work On Redux", completed: true },
  ],
};

if (localStorage.getItem("initialState")) {
  initialState = JSON.parse(localStorage.getItem("initialState"));
} else {
  localStorage.setItem("initialState", JSON.stringify({ todoList: [] }));

  initialState = JSON.parse(localStorage.getItem("initialState"));
}

const todoReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ADD_TODO:
      localStorage.setItem(
        "initialState",
        JSON.stringify({
          todoList: [
            ...state.todoList,
            { id: new Date().getTime(), text: payload, completed: false },
          ],
        })
      );
      return {
        todoList: [
          ...state.todoList,
          { id: new Date().getTime(), text: payload, completed: false },
        ],
      };
    case DELETE_TODO:
      localStorage.setItem(
        "initialState",
        JSON.stringify({
          todoList: [...state.todoList.filter((todo) => todo.id !== payload)],
        })
      );
      return {
        todoList: [...state.todoList.filter((todo) => todo.id !== payload)],
      };
      case TOGGLE_TODO:

        state.todoList.filter((item)=>item.id===payload.id).map((item)=>item.completed? item.completed=false : item.completed=true)
     
           return  {   
             todoList:[
               ...state.todoList,         ] };
    case CLEAR_TODO:
      const clearState = { todoList: [] };
      localStorage.setItem("initialState", JSON.stringify(clearState));
      return clearState;
    default:
      return state;
  }
};
export default todoReducer;
