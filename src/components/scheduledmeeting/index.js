import React from "react";

import {BiDotsVerticalRounded} from "react-icons/bi"
import user1 from "../../assets/images/user1.jpg"
import user2 from "../../assets/images/user2.jpg"
import user3 from "../../assets/images/user3.jpg"
import user4 from "../../assets/images/user4.jpg"
import './style.css'

function Index() {
  return (
    <div className="flex flex-col p-5 py-3">
      <div className="details my-2 flex flex-row justify-between">
        <p className="fs-4 text-primary">30 minute call with clients</p>
        {/* <FaAngleDown /> */}
        <BiDotsVerticalRounded/>
      </div>
      <div className="projTitle my-2">
        <p className="font-medium">Project Discovery Call</p>
      </div>
      <div className="meetTIme my-2">
          <p className="fs-5">Due Soon <b>09:20 am</b></p>
      </div>

      <div className="userList my-2 flex flex-row justify-between">
          <div className="userImg flex flex-row align-middle">
              <img src={user1} alt="" srcset="" />
              <img src={user2} alt="" srcset="" />
              <img src={user3} alt="" srcset="" />
              <p className="text-center align-middle p-0 m-0">3+</p>
          </div>
          <div className="invite px-4 py-1 bg-primary text-white rounded-md"> <span className="font-semibold p-0 m-0">+</span> Invite</div>
      </div>
    </div>
  );
}

export default Index;
