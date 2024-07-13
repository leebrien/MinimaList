import React, { useState } from 'react';

const TodoItem = ({ task, deleteTask, editTask }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const [editedPriority, setEditedPriority] = useState(task.priority);

  const handleSave = () => {
    editTask({ text: editedText, priority: editedPriority });
    setIsEditing(false);
  };

  return (
    <ul>
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
          />
          <select value={editedPriority} onChange={(e) => setEditedPriority(e.target.value)}>
            <option value="LOW">Low</option>
            <option value="MED">Medium</option>
            <option value="HIGH">High</option>
          </select>
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <div className="todoItem">
            <span>{task.priority} - {task.text}</span>
            <div className="todoButtons">
              <button onClick={() => setIsEditing(true)}>Edit</button>
              <button onClick={deleteTask}>Delete</button>
            </div>
          </div>
          
        </>
      )}
    </ul>
  );
};

export default TodoItem;
