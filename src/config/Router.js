import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import RegisterEvent from '../components/RegisterEvent';
import RegisterUser from '../components/RegisterUser';
import Admin from './Admin';

function Router() {
  return (
    <div> 
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/registerStudent" element={<RegisterUser />} />
        <Route path="/registerEvent" element={<RegisterEvent />} />
        <Route path="/login" element={<Login />} />
    </Routes>
  </div>
  )
}

export default Router