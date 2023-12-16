import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import AdminSidebar from "../../../components/molecules/dashboard/AdminSidebar";
import DashboardHeader from "../../../components/molecules/dashboard/NotificationBar";
import Button from "../../../components/molecules/global/Button";
import { VscTriangleDown } from "react-icons/vsc";
import DropDownMenu from "../../../components/molecules/dashboard/DropDownMenu";
const AdminTasks = () => {
  const [dateState, setDateSate] = useState(new Date());
  const handleDateChange = (e) => {
    setDateSate(e);
  };

  return (
    <div className="">
      <div
        className="flex gap-y-5 md:gap-x-5 md:justify-between md:flex-row
       flex-col w-full h-70 "
      >
        {/* first card */}
        <div
          className="flex flex-row md:flex-col gap-x-8 md:gap-y-8 h-full 
         w-[18rem] "
        >
          <div className="bg-white rounded-lg p-8 ">
            <p>Today's task</p>
            <strong>20</strong>
          </div>
          <div className=" bg-white rounded-lg p-8">
            <p>Completed tasks</p>
            <strong>20</strong>
          </div>
        </div>
        {/* second card */}
        <div
          className=" bg-white rounded-lg p-4 w-[18rem] flex flex-col
        items-center gap-y-3"
        >
          <h1 className="font-bold">Assigned tasks</h1>
          <div className="flex flex-col gap-y-8">
            <p>CAD/005 .................. &emsp; 3 Tasks</p>
            <p>CAD/005 .................. &emsp; 3 Tasks</p>
            <p>CAD/005 .................. &emsp; 3 Tasks</p>
          </div>
        </div>
        {/* third card */}
        <div className=" bg-white rounded-md h-full hidden md:block ">
          <Calendar onChange={handleDateChange} value={dateState} />
        </div>
      </div>

      {/* table */}
      <div className="col-span-5 row-span-3 row-start-3 bg-white rounded-md mt-6 p-6">
        <div className="flex items-center justify-between w-full border-b-4 border-bg-[#000] pb-3">
          <h1 className="font-bold uppercase ">Todo List</h1>
          <button className="flex items-center bg-[#e76927] w-max text-white rounded-md py-2 px-3 text-[1rem] lg:px-4 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            Add New
          </button>
        </div>
        <div className="w-full pt-4 md:w-[62%] flex flex-col md:flex-row gap-4 items-center justify-between font-bold px-7 ">
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" className="self-start mt-2 " />
            <p>Policy documents for new clients</p>
          </div>
          <div>
            <span>Agent CAD/005</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center w-full border-b-4 border-bg-[#000] pb-3 py-3 px-7">
          <p className="max-w-[80%] order-2 md:order-0">
            Guide clients through the submission of required documents. Use the
            app to upload and manage client documents securely.{" "}
          </p>
          <div className="md:order-2 ">
            <DropDownMenu
              data={{
                actionState: ["Approve", "Reject", "Transfer"],
                defaultdata: "Approve",
              }}
              id="Id1"
              key="1"
            />
          </div>
          {/* <button className="flex  items-center bg-[#e76927] w-max text-white rounded-md px-5">
            {" "}
            Action <VscTriangleDown />
          </button> */}
        </div>
        <div className="w-full pt-4 md:w-[62%] flex flex-col md:flex-row gap-4 items-center justify-between font-bold">
          <div className="flex items-center gap-4">
            <input type="checkbox" name="" id="" />
            <p>Verify Daily leads</p>
          </div>
          <div>
            <span>Agent CAD/098</span>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center w-full border-b-4 border-bg-[#000] pb-3 py-3 px-7">
          <p className="max-w-[80%] order-2 md:order-1">
            Communicate with clients to understand their insurance needs.
            Utilize the app to access client profiles and policy details.{" "}
          </p>
          <div className="md:order-2">
          <DropDownMenu
            data={{
              actionState: ["Approve", "Reject", "Transfer"],
              defaultdata: "Approve",
            }}
            id="Id2"
            key="2"
          />
          </div>
          {/* <button className="flex items-center bg-[#e76927] w-max text-white rounded-md px-5">
            {" "}
            Action <VscTriangleDown />
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default AdminTasks;
