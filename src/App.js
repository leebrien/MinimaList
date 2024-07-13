import React, { useState } from 'react';
import TodoList from './TodoList';
import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [priority, setPriority] = useState('LOW');

  const addTask = () => {
    if (newTask.trim() === '') return;
    setTasks([...tasks, { text: newTask, priority }]);
    setNewTask('');
    setPriority('LOW');
  };

  const deleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  const handleEditTask = (index, updatedTask) => {
    const updatedTasks = tasks.map((task, i) => (i === index ? updatedTask : task));
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <div className="minimalist">
        <span className="minilist">mini </span>
        <span className="ma">ma</span>
        <span className="minilist">LIST</span>
      </div>
      
      <div className="inputsContainer">
        <input
          type="text"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          placeholder="Add a new task"
          className="inputTask"
        />

        <div className="inputButtons">
          <select value={priority} onChange={(e) => setPriority(e.target.value)}>
            <option value="LOW">Low</option>
            <option value="MED">Medium</option>
            <option value="HIGH">High</option>
          </select>
          <button onClick={addTask}>Add Task</button>
        </div>
        
      </div>
      
      <div className="taskContainer">
          <TodoList tasks={tasks} deleteTask={deleteTask} editTask={handleEditTask} />
      </div>

    </div>
  );
};

export default App;
