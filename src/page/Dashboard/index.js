import React from "react";

import Scheduledmeeting from "../../components/scheduledmeeting";
import { FaAngleDown, FaFilter } from "react-icons/fa";
import { BiDotsVerticalRounded } from "react-icons/bi";
import Activitynotification from "../../components/activityNotification";
import Projcard from "../../components/projcard"
import Invoicecard from "../../components/invoicecard"

import u1 from "../../assets/images/user5.jpg";
import u2 from "../../assets/images/user6.jpg";
import u3 from "../../assets/images/user7.jpg";
import u4 from "../../assets/images/user4.jpg";

function index() {
  return (
    <div className="grid grid-cols-10 gap-0">
      <div className="dash-body pb-8 md:col-span-7 col-span-10 flex flex-col m-6 overflow-scroll ">
        <div className="wlcmmsg my-3 fs-10 font-semibold">
          <h2>Welcome back, Andrew!</h2>
          <p className="fs-1 text-gray">
            Have a look at the Quick Progress Bar.
          </p>
          <div className="cardlist flex flex-row w-100 justify-between flex-wrap">
            <div className="card-lg m-1 flex flex-col bg-primary-deep rounded p-3 justify-between">
              <div className="card-tags flex flex-row justify-between">
                <p className="type fs-1 rounded text-white bg-black-transparent px-3 py-1">
                  Live projects
                </p>
                <p className="seemore fs-1 rounded text-white bg-black-transparent px-3 py-1">
                  View All
                </p>
              </div>
              <div className="card-data flex flex-col">
                <p className="card-num text-white fs-10 font-bold">56</p>
                <p className="card-det text-white fs-1 font-thin">
                  Currently, the projects is in progress.
                </p>
              </div>
            </div>
            <div className="card m-1 flex flex-col bg-primary-light rounded p-3 justify-between">
              <div className="card-tags flex flex-row justify-between">
                <p className="type fs-1 rounded text-white bg-black-transparent px-3 py-1">
                  Inprogress
                </p>
              </div>
              <div className="card-data flex flex-col">
                <p className="card-num text-white fs-10 font-bold">124</p>
                <p className="card-det text-white fs-1 font-thin">
                  Projects in progress
                </p>
              </div>
            </div>
            <div className="card m-1 flex flex-col bg-violate rounded p-3 justify-between">
              <div className="card-tags flex flex-row justify-between">
                <p className="type fs-1 rounded text-white bg-black-transparent px-3 py-1">
                  Compleated
                </p>
              </div>
              <div className="card-data flex flex-col">
                <p className="card-num text-white fs-10 font-bold">24</p>
                <p className="card-det text-white fs-1 font-thin">
                  Completed projects
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="wlcmmsg my-3 fs-10 font-semibold">
          <div className="card-header flex flex-row justify-between">
            <div className="left">
              <h2>Current Projects </h2>
              <p className="fs-1 text-gray">
                Projects that are currently in progress
              </p>
            </div>
            <div className="right flex">
              <div className="filter flex flex-row fs-4 mx-1">
                <BiDotsVerticalRounded />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <Projcard/>
            <Projcard/>
            <Projcard/>
          </div>
        </div>
        <div className="wlcmmsg my-3 fs-10 font-semibold">
          <div className="card-header flex flex-row justify-between">
            <div className="left">
              <h2>Pending Invoice</h2>
              <p className="fs-1 text-gray">
                Invoices that are currently pending
              </p>
            </div>
            <div className="right flex">
              <div className="filter flex flex-row fs-4 mx-1">
                <BiDotsVerticalRounded />
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between flex-wrap">
            <Invoicecard/>
            <Invoicecard/>
            <Invoicecard/>
          </div>
        </div>
      </div>

      <div className="rtsidebar h-screen flex flex-col md:col-span-3 col-span-10 pb-8">
        <div className="tabtitle flex justify-between mx-5 py-2 border-b-2 border-gray-100">
          <p className="fs-9 font-semibold ">Upcoming Meeting</p>
          <BiDotsVerticalRounded />
        </div>
        <div className="">
          <div className=" flex justify-between px-5 py-2">
            <p className="fs-5  font-semibold ">Today's Meeting</p>
            <FaAngleDown />
          </div>
          <Scheduledmeeting />
          <Scheduledmeeting />
        </div>

        <div className="tabtitle flex justify-between mx-5 py-2 border-b-2 border-gray-100">
          <p className="fs-9 font-semibold ">Recent Activity</p>
          <BiDotsVerticalRounded />
        </div>
        <div className=" flex flex-col px-3 pb-8">
          <Activitynotification
            UserImg={u1}
            Msg={"Thanks you for booking a meeting with JJ."}
            Time={" Jun 14, 2021 at 5:31 PM"}
            Name={"Kevin Dukkon"}
          />
          <Activitynotification
            UserImg={u2}
            Msg={"You received a message from Ashish "}
            Time={"Jun 14, 2021 at 6:31 PM"}
            Name={"Ashish Sharma "}
          />
          <Activitynotification
            UserImg={u2}
            Msg={"You received a message from Ashish "}
            Time={"Jun 14, 2021 at 6:11 PM"}
            Name={"Ashish Sharma "}
          />
          <Activitynotification
            UserImg={u2}
            Msg={"You received a message from Ashish "}
            Time={"Jun 14, 2021 at 5:31 PM"}
            Name={"Ashish Sharma "}
          />
        </div>
      </div>
    </div>
  );
}

export default index;
