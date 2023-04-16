// pages/job-board.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Link from 'next/link';

const JobBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/tasks/');
        setTasks(response.data);
      } catch (error) {
        console.error(error);
        // Show error message
      }
    };
    fetchTasks();
  }, []);

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Job Board</h1>
      <ul>
        {tasks.map(task => (
          <li key={task.id} className="border p-4 mb-2">
            <h2 className="text-xl font-bold">{task.title}</h2>
            <p>{task.description}</p>
            <div>
              <strong>Status:</strong> {task.completed ? 'Completed' : 'Pending'}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobBoard;
