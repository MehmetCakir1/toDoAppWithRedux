import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import { Provider } from 'react-redux';
import { getStore } from './redux';
import Todo from './components/Todo';
import { ToastContainer } from "react-toastify";



function App() {
  const store = getStore();
  return (
    <div className="app">
      <Provider store={store}>
        <ToastContainer/>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;