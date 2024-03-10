import React from 'react';
import "./home.css"
import { NavLink, Outlet } from 'react-router-dom';
const Home = () => {
    const li=<>
    <li><NavLink to={"/"}>Exclusive task</NavLink></li>
    <li><NavLink to={"/regular_task"}>Regular task</NavLink></li>
    </>
    return (
        <div>
           <div><div>
            <ul className='flex justify-center items-center gap-6'>
                {li}
            </ul>
           </div></div>
           <div><Outlet></Outlet></div>
        </div>
    );
};

export default Home;