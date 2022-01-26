import './App.css';
import {useSelector, useDispatch} from 'react-redux'

import Todo from './components/Todo';
import TodoList from './components/TodoList'


function App() {
  


  const dispatch= useDispatch();


  return (
    <div className="App">
      <h1>TODO LIST</h1>
      <Todo/>
      <TodoList/>
    </div>
  );
}

export default App

