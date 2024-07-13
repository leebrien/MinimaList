import React from 'react';
import TodoItem from './TodoItem';

const TodoList = ({ tasks, deleteTask, editTask }) => {

  return (
    <ul>
      {tasks.map((task, index) => (
        <TodoItem key={index} task={task} deleteTask={() => deleteTask(index)} editTask={(updatedTask) => editTask(index, updatedTask)} />
      ))}
    </ul>
  );
};

export default TodoList;
