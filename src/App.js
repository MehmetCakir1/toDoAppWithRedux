import './App.css';
import { Provider } from 'react-redux';
import { getStore } from './redux';
import Todo from './components/Todo';


function App() {
  const store = getStore();
  return (
    <div className="app">
      <Provider store={store}>
        <Todo />
      </Provider>
    </div>
  );
}

export default App;