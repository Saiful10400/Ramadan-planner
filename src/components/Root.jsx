import React from 'react';
import Navbar from './parent/Navbar';
import { Outlet } from 'react-router-dom';

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div><Outlet></Outlet></div>
    </div>
  );
};

export default Root;