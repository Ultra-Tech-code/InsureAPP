import React from "react";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useAuth } from "../../../pages/auth/Authentication/AuthContext";


const NotificationBar = (props) => {
  const { topic } = props;

  const navigate = useNavigate();

  const { logout } = useAuth();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  const baseURL = process.env.REACT_APP_BASE_URL;
  const adminUrl = `${baseURL}/auth/logout`;
  const agentUrl = `${baseURL}/agent/logout`;

  // handle either logged in as admin or agent
  const getLogoutUrl = (user) => {
    console.log(user)
    if (user === "admin") {
      return adminUrl;
    } else {
      return agentUrl;
    }
  };

  const handleLogout = async () => {
    logout();
    navigate("/");

  };

  return (
    <>
      <nav className="w-full flex justify-between pl-0 py-3 gap-7 md:gap-10 lg:gap-18 bg-transparent">
        <div id="greetings" className=" md:text-3xl font-semibold mb-2">
          {topic || ""}
        </div>

        {/* Image for hamburger */}
        <div className="w-[4rem] h-[4rem] lg:hidden">
          <img
            src="https://tinyurl.com/3wuh45ve"
            alt="INSure Logo"
            className="w-full"
          />
        </div>
        <div className="flex justify-between gap-7 md:gap-10 lg:gap-18">
          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path
                fillRule="evenodd"
                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="self-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="M5.85 3.5a.75.75 0 00-1.117-1 9.719 9.719 0 00-2.348 4.876.75.75 0 001.479.248A8.219 8.219 0 015.85 3.5zM19.267 2.5a.75.75 0 10-1.118 1 8.22 8.22 0 011.987 4.124.75.75 0 001.48-.248A9.72 9.72 0 0019.266 2.5z" />
              <path
                fillRule="evenodd"
                d="M12 2.25A6.75 6.75 0 005.25 9v.75a8.217 8.217 0 01-2.119 5.52.75.75 0 00.298 1.206c1.544.57 3.16.99 4.831 1.243a3.75 3.75 0 107.48 0 24.583 24.583 0 004.83-1.244.75.75 0 00.298-1.205 8.217 8.217 0 01-2.118-5.52V9A6.75 6.75 0 0012 2.25zM9.75 18c0-.034 0-.067.002-.1a25.05 25.05 0 004.496 0l.002.1a2.25 2.25 0 11-4.5 0z"
                clipRule="evenodd"
              />
            </svg>
          </div>

          <div className="relative self-center">
            {/* Dropdown for Logout */}
            <div onClick={handleDropdownToggle} className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-10 h-10"
              >
                <path
                  fillRule="evenodd"
                  d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            {showDropdown && (
              <div className="absolute top-10 right-0 bg-white border rounded shadow-md">
                <button
                  onClick={handleLogout}
                  className="block px-4 py-2 hover:text-slate-100 hover:bg-blue-700"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default NotificationBar;
