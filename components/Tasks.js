// components/Tasks.js

import React from 'react';

const Tasks = ({ tasks }) => {
  return (
    <div className="bg-gray-100 p-4 rounded">
      <h2 className="text-xl font-bold mb-2">Tasks</h2>
      <ul className="list-disc pl-6 space-y-1">
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
