import React from 'react'
import { atom, useRecoilValue } from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';


export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

function TodoList() {
    const todoList = useRecoilValue(todoListState);
  return (
    <div>
        <TodoItemCreator />
         {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoList