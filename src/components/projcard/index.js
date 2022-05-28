import React from "react";
import { BsFillCalendarDateFill } from "react-icons/bs";
import uimg from "../../assets/images/user6.jpg";

function Index() {
  return (
    <div className="invoicecard border border-gray-200 p-3 m-2">
      <h2 className="fs-5">Construction Project </h2>
      <p className="fs-exs text-gray">Project Name</p>
      <div className="flex justify-between my-3">
        <p className="fs-1">$ 100-800</p>
        <p className="fs-1 flex">
          <BsFillCalendarDateFill />
          Deadline - 25th May
        </p>
      </div>
      <div className="progressbar">
        <div className="progress"></div>
      </div>
      <div className="progressInfo flex justify-between">
        <p className="fs-1 text-gray-500">Progress Bar</p>
        <p className="fs-1 text-gray-500">75%</p>
      </div>
      <div className=" flex flex-row justify-between">
        <div className="left flex">
          <div className="vendorproImg py-3">
            <img src={uimg} alt="userImage" />
          </div>
          <div className="userInfo flex flex-col justify-center align-middle">
            <p className="uName fs-1  px-2">Vendo Name</p>
          </div>
        </div>
        <div className="right flex flex-col justify-center align-middle">
          <div className="px-2 py-1 text-white rounded mx-1 fs-2 bg-primary">
            view
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
