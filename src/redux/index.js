import { createStore, combineReducers } from 'redux';
import todoReducer from './reducers/todoReducers';


const rootReducer = combineReducers({
    toDo: todoReducer,
  });
  
  export const getStore = () => {
    const store = createStore(rootReducer);
    return store;
  };
  