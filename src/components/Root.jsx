 
import Navbar from './parent/Navbar';
import { Outlet } from 'react-router-dom';
import "./parent/root.css"

const Root = () => {
  return (
    <div>
      <div className='fixed w-full top-0 left-0 z-40'><Navbar></Navbar></div>
      <div className='h-screen overflow-y-scroll relative pt-[50px] RootContainer'><Outlet></Outlet></div>
    </div>
  );
};

export default Root;