import React from 'react'
import { todoListState } from './TodoList';
import { selector, useRecoilValue } from 'recoil';

const todoListStatsState = selector({
    key: 'todoListStatsState',
    get: ({get}) => {
      const todoList = get(todoListState);
      const totalNum = todoList.length;
      const totalCompletedNum = todoList.filter((item) => item.isComplete).length;
      const totalUncompletedNum = totalNum - totalCompletedNum;
      const percentCompleted = totalNum === 0 ? 0 : totalCompletedNum / totalNum * 100;
  
      return {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      };
    },
  });

function TodoListStat() {
    const {
        totalNum,
        totalCompletedNum,
        totalUncompletedNum,
        percentCompleted,
      } = useRecoilValue(todoListStatsState);
    
      const formattedPercentCompleted = Math.round(percentCompleted);
  return (
    <ul>
      <li>Total items: {totalNum}</li>
      <li>Items completed: {totalCompletedNum}</li>
      <li>Items not completed: {totalUncompletedNum}</li>
      <li>Percent completed: {formattedPercentCompleted}</li>
    </ul>
  )
}

export default TodoListStat