
import React, { useContext } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import './App.css';

import Register from './RegisterLogin/Register';
import Login from './RegisterLogin/Login';
import Header from './navbar/Header';
import UserDetail from './Dashboard/user/UserDetail';
import Logout from './Dashboard/logout/Logout';
import UserLogout from './Dashboard/logout/UserLogout';
import Dashboard from './Dashboard/user/Dashboard';
import ProtectedRoute from './Routes/ProtectedRoutes';
import { AuthContext } from './components/auth/AuthContext';
import TaskForm from './components/Task/TaskForm';
import GetTask from './components/Task/GetTask';
import UpdateTask from './components/Task/UpdateTask';

function App() {
  const { token } = useContext(AuthContext);

  return (
    <>


      {/* <Header /> */}
      <Routes>


        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<Navigate to="/login" replace />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/user-detail" element={<UserDetail />} />
        <Route path="/logout" element={<UserLogout />} />
        <Route path="/addtask" element={<TaskForm />} />
        <Route path="/gettask" element={<GetTask />} />
        <Route path="/updatetask" element={<UpdateTask />} />
        <Route path="*" element={<Navigate to="/" replace />} />


      </Routes>
    </>
  );
}

export default App;


