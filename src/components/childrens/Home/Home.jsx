import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import { NavLink, Outlet } from "react-router-dom";
import { dataProvider } from "../../context api/ContextApi";
const Home = () => {
  // get all teak data.
  const { regularTaskData } = useContext(dataProvider);
  const li = (
    <>
      <li>
        <NavLink to={"/"}>Exclusive task</NavLink>
      </li>
      <li>
        <NavLink to={"/regular_task"}>
          Regular task{" "}
          <span className="text-red-500">({regularTaskData.length})</span>
        </NavLink>
      </li>
    </>
  );



  return (
    <div>
      <div>
        <div>
          <ul className="flex justify-center items-center gap-6">{li}</ul>
        </div>
      </div>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Home;
