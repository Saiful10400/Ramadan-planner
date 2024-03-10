import { NavLink } from "react-router-dom";

 
import "./Navbar.css"
const Navbar = () => {
    // lis.
    const li=<>
    <li><NavLink to={"/"}>আজকের চ্যালেঞ্জ</NavLink></li>
   <li> <NavLink to={"/leader_board"}>লিডারবোর্ড</NavLink></li>
   {/* <li> <NavLink to={"/register"}>Register</NavLink></li> */}
    </>
    return (
       <div className=" navContainer">
        <ul className="flex justify-center items-center gap-x-14">
          {li}
        </ul>
       </div>
    );
};

export default Navbar;