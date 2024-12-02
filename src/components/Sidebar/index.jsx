import React, { useState, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaBars } from "react-icons/fa6";
import sidebar from "../../utils/sidebar";

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1280px)");
    const handleResize = (e) => setOpen(e.matches);
    handleResize(mediaQuery);
    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);
  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <div className="">
      {/* Sidebar */}
      <aside
        className={`fixed inset-y-1 flex-wrap items-center justify-between w-64 p-0 overflow-y-auto antialiased transition-transform duration-300 bg-white shadow-xl dark:bg-slate-850 z-50 rounded-2xl ${
          open ? "translate-x-3" : "-translate-x-full"
        }`}
      >
        <div className="absolute w-full bg-blue-500 dark:hidden min-h-75"></div>

        {/* Logo Section */}
        <div className="h-19 px-8 py-6">
          <a className="block text-sm text-slate-700 dark:text-white" href="/">
            <img
              src="/assets/img/logo-ct-dark.png"
              className="inline dark:hidden max-h-8"
              alt="logo"
            />
            <img
              src="/assets/img/logo-ct.png"
              className="hidden dark:inline max-h-8"
              alt="logo"
            />
            <span className="ml-2 font-semibold">KSPI Tutors</span>
          </a>
        </div>

        <hr className="h-px mt-0 bg-transparent bg-gradient-to-r from-transparent via-black/40 to-transparent dark:bg-gradient-to-r dark:via-white" />

        {/* Navigation Links */}
        <div className="flex-grow">
          <ul className="flex flex-col pl-0">
            {sidebar.map((parent) => {
              return !parent.hidden 
            })}
            <li className="w-full mt-0.5">
              <Link
                to="/dashboard"
                className="flex items-center px-4 py-2 text-sm font-semibold text-slate-700 transition-colors bg-blue-500/13 rounded-lg dark:text-white"
              >
                <div className="flex items-center justify-center w-8 h-8 text-blue-500 bg-center rounded-lg xl:p-2.5">
                  <i className="ni ni-tv-2"></i>
                </div>
                <span className="ml-1">Dashboard</span>
              </Link>
            </li>
            <li className="w-full mt-0.5">
              <Link
                to="/profile"
                className="flex items-center px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-slate-700 dark:text-white"
              >
                <div className="flex items-center justify-center w-8 h-8 text-orange-500 bg-center rounded-lg xl:p-2.5">
                  <i className="ni ni-calendar-grid-58"></i>
                </div>
                <span className="ml-1">Profile</span>
              </Link>
            </li>
            <li className="w-full mt-0.5">
              <Link
                to="/settings"
                className="flex items-center px-4 py-2 text-sm font-semibold transition-colors rounded-lg text-slate-700 dark:text-white"
              >
                <div className="flex items-center justify-center w-8 h-8 text-emerald-500 bg-center rounded-lg xl:p-2.5">
                  <i className="ni ni-credit-card"></i>
                </div>
                <span className="ml-1">Settings</span>
              </Link>
            </li>
            <li className="mx-4 mt-4 text-center">
              <button className="w-full px-4 py-2 text-sm font-semibold text-white bg-red-500 rounded-lg">
                Logout
              </button>
            </li>
          </ul>
        </div>
      </aside>

      {/* Main Content */}
      <main
        className={`transition-all duration-300 relative h-full max-h-screen xl:ml-64 rounded-xl p-4 xl:pl-8`}
      >
        {/* Mobile Menu Button */}
        <div className="flex items-center justify-between">
          <div className="breadcrumbs text-sm">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>Dashboard</li>
            </ul>
          </div>
          <button
            onClick={toggleSidebar}
            className="p-2 xl:hidden"
          >
            {open ? <FaBarsStaggered /> :
            <FaBars />}
          </button>
        </div>
        <Outlet />
      </main>
    </div>
  );
};

export default Sidebar;
