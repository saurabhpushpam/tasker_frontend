import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { AuthContext } from '../../components/auth/AuthContext';
import Header from '../../navbar/Header';

const GetTask = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const { token } = useContext(AuthContext);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/getalltask', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setTasks(response.data.data);
      } catch (error) {
        setError('Failed to fetch tasks. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    fetchTasks();
  }, [token]);

  return (
    <>
      <Header></Header>
      <header>
        <h1>Task List</h1>
      </header>

      <div className="task-list-container">
        {loading && <p>Loading tasks...</p>}
        {error && <p className="error-message">{error}</p>}
        {tasks.length === 0 && !loading && <p>No tasks available.</p>}
        <ul className="task-list">
          {tasks.map((task) => (
            <li key={task._id} className="task-item">
              <h3>{task.taskname}</h3>
              <p><strong>Description:</strong> {task.description}</p>
              <p><strong>Due Date:</strong> {task.duedate}</p>
              <p><strong>Priority:</strong> {task.priority}</p>
              <p><strong>Status:</strong> {task.status}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default GetTask;
