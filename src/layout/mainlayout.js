import React, { useContext } from "react";
import { GlobalContext } from "../globalapi/GlobalProvider";
import { Outlet, NavLink } from "react-router-dom";
import { RiDashboardFill } from "react-icons/ri";
import Navbar from "../components/site/navbar";
import {AiFillCloseSquare} from "react-icons/ai"
import {
  FaProjectDiagram,
  FaRegPaperPlane,
  FaCalendarDay,
} from "react-icons/fa";
import {IoNewspaperSharp} from "react-icons/io5"
import {IoIosCall} from "react-icons/io"
import {MdNotificationsActive} from "react-icons/md"
import {AiOutlineCloseCircle} from "react-icons/ai"


function Mainlayout() {
  const { nav } = useContext(GlobalContext);
  const [navOpen, setNavOpen] = nav;
  let sidebar = navOpen
    ? "sidebar absolute top-0 left-0 w-3/4 md:w-auto col-span-none md:relative md:block md:col-span-1"
    : "hidden";
    let body = navOpen?"body col-span-5 md:col-span-4":"body col-span-5"
  return (
    <div class="layout grid light grid-cols-5 gap-1 w-100">
      <div className="col-span-5">
        <Navbar />
      </div>
      <div className=" grid grid-cols-5 col-span-5">
        <div className={sidebar}>
          <div className="menulist list-none pt-40">
            <NavLink to="/dashboard">
              <li className="menuitem p-2 px-6 flex">
                <RiDashboardFill />
                <div className="p-0 mx-4">Dashboard</div>
              </li>
            </NavLink>
            <NavLink to="/project">
              <li className="menuitem p-2 px-6 flex">
                <IoNewspaperSharp />
                <div className="p-0 mx-4">Project</div>
              </li>
            </NavLink>
            <NavLink to="/calender">
              <li className="menuitem p-2 px-6 flex">
                <FaCalendarDay />
                <div className="p-0 mx-4">Calender</div>
              </li>
            </NavLink>
            <NavLink to="/message">
              <li className="menuitem p-2 px-6 flex justify-between">
                <div className="rightside flex">
                  <FaRegPaperPlane />
                  <div className="p-0 mx-4">Messages</div>
                </div>
                <div className="leftside p-.5 px-3 rounded text-white bg-primary">2</div>
              </li>
            </NavLink>
            <NavLink to="/notifications">
              <li className="menuitem p-2 px-6 flex justify-between">
              <div className="rightside flex">
                  <MdNotificationsActive />
                <div className="p-0 mx-4">Notifications</div>
                </div>
                <div className="leftside p-.5 px-3 rounded text-white bg-primary">5</div>

              </li>
            </NavLink>
            <NavLink to="/contacts">
              <li className="menuitem p-2 px-6 flex">
                <IoIosCall />
                <div className="p-0 mx-4">Contacts</div>
              </li>
            </NavLink>
            <p className="p-2 px-6 fs-6 font-semibold">Promotions</p>
            <NavLink to="/promotions">
              <li className="menuitem p-2 px-6 flex">
                <FaProjectDiagram />
                <div className="p-0 mx-4">Promotions</div>
              </li>
            </NavLink>
          </div>
        </div>
        <div className={body}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Mainlayout;
