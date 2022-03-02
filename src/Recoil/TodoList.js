import React from 'react'
import { atom, useRecoilValue, selector } from 'recoil';
import TodoItemCreator from './TodoItemCreator';
import TodoItem from './TodoItem';
import TodoListFilters from './TodoListFilters';
import TodoListStat from './TodoListStat';

export const todoListFilterState = atom({
  key: 'todoListFilterState',
  default: 'Show All',
});
 
const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({get}) => {
    const filter = get(todoListFilterState);
    const list = get(todoListState);

    switch (filter) {
      case 'Show Completed':
        return list.filter((item) => item.isComplete);
      case 'Show Uncompleted':
        return list.filter((item) => !item.isComplete);
      default:
        return list;
    }
  },
});

export const todoListState = atom({
    key: 'todoListState',
    default: [],
  });

function TodoList() {
    const todoList = useRecoilValue(filteredTodoListState);
  return (
    <div>
      <TodoListStat /> <br />
      <TodoListFilters /> <br />
        <TodoItemCreator /> <br />
         {todoList.map((todoItem) => (
        <TodoItem key={todoItem.id} item={todoItem} />
      ))}
    </div>
  )
}

export default TodoList