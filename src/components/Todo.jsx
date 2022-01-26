import React from 'react';
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { AddTodo } from '../actions/actions';

function Todo() {
  const [userInput, setUserInput] = useState({title:""});
  const dispatch = useDispatch();

  return (
    <form onSubmit={(e)=>{e.preventDefault() ; userInput.title.trim().length != 0 ? dispatch(AddTodo(userInput)) : alert("please enter todo"); setUserInput({title:""})}}>
   
    <input value={userInput.title} onChange={(e)=>{setUserInput({id:Date.now(), title: e.target.value, completed: false})}} type="text" placeholder="Enter a todo"/>

   <input type="submit" value="Submit"/>
    </form>
    )
}

export default Todo;
