 
import Navbar from './parent/Navbar';
import { Outlet } from 'react-router-dom';
import "./parent/root.css"

const Root = () => {
  return (
    <div>
      <div className='fixed w-full top-0 left-0'><Navbar></Navbar></div>
      <div className='min-h-screen pt-[50px] RootContainer'><Outlet></Outlet></div>
    </div>
  );
};

export default Root;