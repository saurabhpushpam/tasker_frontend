import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './user.css';
import UserDetail from './UserDetail';
import Header from '../../navbar/Header';

const Dashboard = () => {
  const [allCount, setAllCount] = useState(0);
  const [pendingCount, setPendingCount] = useState(0);
  const [completeCount, setCompleteCount] = useState(0);

  useEffect(() => {
    // Fetch data for "All"
    axios.get('http://localhost:5000/api/all')
      .then(response => setAllCount(response.data.data.count))
      .catch(error => console.error('Error fetching all data:', error));

    // Fetch data for "Pending"
    axios.get('http://localhost:5000/api/pending')
      .then(response => setPendingCount(response.data.data.count))
      .catch(error => console.error('Error fetching pending data:', error));

    // Fetch data for "Complete"
    axios.get('http://localhost:5000/api/complete')
      .then(response => setCompleteCount(response.data.data.count))
      .catch(error => console.error('Error fetching complete data:', error));
  }, []);

  return (
    <>
      <Header></Header>
      <h1 style={{ "textAlign": "center" }}>User Detail</h1>

      <UserDetail></UserDetail>
      <br />

      <h1 style={{ "textAlign": "center" }}>Dashboard</h1>

      <div className="dashboard-container">
        <div className="dashboard-box box-all">
          <h2>All Tasks</h2>
          <h3><b>{allCount}</b></h3>
        </div>
        <div className="dashboard-box box-pending">
          <h2>Pending Tasks</h2>
          <h3><b>{pendingCount}</b></h3>
        </div>
        <div className="dashboard-box box-complete">
          <h2>Completed Tasks</h2>
          <h3><b>{completeCount}</b></h3>
        </div>
      </div>
    </>
  );
};

export default Dashboard;