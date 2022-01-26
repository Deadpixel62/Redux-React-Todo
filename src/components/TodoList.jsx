import React from 'react';
import {useSelector, useDispatch,} from 'react-redux'
import {RemoveTodo, ToggleTodo, DeleteCompleted, FetchTodos} from '../actions/actions'
import axios from 'axios'
import {useEffect} from 'react'


function TodoList() {
    const todos = useSelector(state => state.todos);
    const count = useSelector((state) =>
      state.todos.reduce(
        (counter, obj) => (obj.completed  ? (counter += 1) : counter),
        0
      )
    );
   

  

    const dispatch = useDispatch();

      useEffect(() => {
        let mounted = true;
        if (mounted) {
          axios
            .get("https://jsonplaceholder.typicode.com/users/1/todos")
            .then((res) => {
              dispatch(FetchTodos(res.data.slice(0, 10)));
            });
        }

        return () => {
          mounted = false;
        };
      }, []);


  return (
    <ul>
      {todos.map((todo) => {
        return (
          <li className={todo.completed ? "completed" : ""} key={todo.id}>
            {todo.title}
            <button onClick={() => dispatch(ToggleTodo(todo.id))}>
              Toggle
            </button>
            <button onClick={() => dispatch(RemoveTodo(todo.id))}>
              Remove
            </button>
          </li>
        );
      })}
      <li style={{ justifyContent: "center" }}>
        Completed : {count} =====
        <button onClick={() => dispatch(DeleteCompleted())}>
          Delete Completed
        </button>
      </li>
    </ul>
  );
}

export default TodoList;
             