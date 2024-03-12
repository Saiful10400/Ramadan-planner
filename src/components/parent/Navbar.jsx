import { NavLink } from "react-router-dom";

 
import "./Navbar.css"
import { useContext } from "react";
import { dataProvider } from "../context api/ContextApi";
const Navbar = () => {
    // lis.
    const li=<>
    <li><NavLink to={"/"}>আজকের চ্যালেঞ্জ</NavLink></li>
   <li> <NavLink to={"/leader_board"}>লিডারবোর্ড</NavLink></li>
    </>

    // is the user logged in or not chek.
    const{user}=useContext(dataProvider)
    console.log(user)
    return (
       <div className=" navContainer">
        <ul className="flex justify-evenly items-center ">
          {li}
          {user?<div className="w-[40px] rounded-full overflow-hidden h-[40px]"><img className="w-full object-cover h-full" src={user.photoURL} alt="" /></div>:<li> <NavLink to={"/login"}>লগইন</NavLink></li>
          }
        </ul>
       </div>
    );
};

export default Navbar;