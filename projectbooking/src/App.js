import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Header from './Pages/header/Header';
import Dashboard from './Pages/Dashboard/Dashboard';
import NoMatch from './Pages/noMatch/noMatch';
import PostUser from './Pages/Students/PostUser';
import UpdateUser from './Pages/Students/UpdateUser';
import LoginForm from './Pages/Dashboard/Login';


function App() {
  const location = useLocation();
  const isLoginPage = location.pathname === '/';

  return (
    <>
      {!isLoginPage && <Header />}
      <Routes>
  
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/student' element={<PostUser />} />
        <Route path='/student/:id' element={<UpdateUser />} />
        <Route path='/nomatch' element={<NoMatch />} />
        <Route path='/' element={<LoginForm />} />
       
      </Routes>
    </>
  );
}

export default App;
