import logo from "../assets/logo.png";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";
import { FaSearch } from "react-icons/fa";

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  const navigation = [
    { title: "Home", path: "/" },
    { title: "Properties", path: "/profile" },
    { title: "About", path: "/about" },
  ];
  return (
    <nav className="bg-slate-200 shadow-md border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none md:flex-initial">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `nav-link flex items-center gap-3 text-2xl font-semibold ${
                isActive ? "text-sky-700" : isPending ? "text-gray-600" : ""
              }`
            }
          >
            <img src={logo} alt="Float UI logo" className="w-16 sm:w-20" />
            <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
              <span className="text-sky-700">Key</span>
              <span className="text-slate-700">Haven</span>
            </h1>
          </NavLink>
        </div>
        <div className="flex-1 flex items-center justify-between">
          <div
            className={`bg-slate-200 absolute z-20 w-full top-16 left-0 p-4 border-b md:static md:block md:border-none ${
              menuState ? "" : "hidden"
            }`}
          >
            <ul className="mt-6 space-y-5 md:flex md:space-x-6 md:space-y-0 md:mt-0  ">
              {navigation.map((item, idx) => (
                <li key={idx} className="text-gray-600 hover:text-sky-600">
                  <NavLink
                    to={item.path}
                    className={({ isActive, isPending }) =>
                      `nav-link ${
                        isActive
                          ? "text-sky-700 font-medium border-b-2 border-sky-700"
                          : isPending
                          ? "text-gray-600"
                          : ""
                      }`
                    }
                    onClick={() => setMenuState(!menuState)}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t border-gray-400 md:hidden" />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border bg-white rounded-md p-2 hover:border-sky-700 focus-within:border-sky-700">
              <input
                className="w-full mx-2 bg-transparent outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
              <FaSearch className="px-2 w-10 cursor-pointer hover:text-sky-700" />
            </form>
            <ProfileDropDown class="hidden md:block" />
            <button
              className="outline-none text-gray-400 block md:hidden"
              onClick={() => setMenuState(!menuState)}
            >
              {menuState ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
