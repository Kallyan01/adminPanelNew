import React from "react";
import { FaSearch } from "react-icons/fa";
import { MdArrowForwardIos } from "react-icons/md";
import uimg from "../../../assets/images/user6.jpg";
function Index() {
  return (
    <div className="navbar flex flex-row justify-between align-middle">
      <div className="logo bg-white py-4 px-6">
        <span className="font-extrabold fs-9">LOGO</span>
      </div>
      <div className="searchbar bg-slate-200 p-3 flex flex-row align-middle">
        <div className="icon my-auto mx-2">
          <FaSearch />
        </div>
        <input
          type="text"
          name=""
          id=""
          className="search-box bg-transparent text-xs"
          placeholder="Search for Projects"
        />
      </div>
      <div className="userDet flex flex-row">
        <div className="userproImg p-3 text-center align-middle">
          <img src={uimg} alt="userImage" />
        </div>
        <div className="userInfo flex flex-col justify-center align-middle">
          <p className="uName fs-8">Oliver Smith</p>
          <p className="uType fs-5">Vendor</p>
        </div>
        <div className="visitProfile flex flex-col justify-center align-middle mx-5">
          <MdArrowForwardIos />
        </div>
      </div>
    </div>
  );
}

export default Index;
