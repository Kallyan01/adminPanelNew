import React from "react";
import u1 from "../../assets/images/user2.jpg"

function index() {
  return (
    <div className="invoicecard border border-gray-200 p-3 m-2">
      <div className="ammount fs-10 font-bold">$137</div>
      <div className="tags flex flex-row justify-between align-middle">
          <p className="fs-1 py-1 px-2">Amount</p>
          <p className="py-1 px-2 fs-1 bg-primary text-white">Approved</p>
      </div>
      <div className="tranDetails flex flex-row my-2">
          <div className="uPic">
              <img src={u1} alt="pic" />
          </div>
          <div className="Tdetls flex flex-col ">
              <div className="fs-3">Erin Gonzales</div>
              <div className="flex flex-row justify-between">
                  <p className="fs-1">#5331</p>
                  <p className="fs-1 text-gray-500">Date : 25 May</p>
              </div>
          </div>
      </div>
    </div>
  );
}

export default index;
