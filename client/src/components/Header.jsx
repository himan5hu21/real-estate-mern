// import { FaSearch } from "react-icons/fa";
import logo from "../assets/image.png";

// function Header() {
//   return (
//     <header className="bg-slate-200 shadow-md ">
//       <div className="flex justify-between items-center max-w-6xl mx-auto p-3">
//         <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
//           {/* <span className="text-slate-500">Sahand</span>
//           <span className="text-slate-700">Estate</span> */}
//           <a href="#">
//             <img src={logo} alt="logo" className="w-20" />
//           </a>
//         </h1>
//         <form className="bg-slate-100 p-3 rounded-lg flex items-center">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none w-24 sm:w-64 md:w-64"
//           />
//           <FaSearch className=" text-slate-500" />
//         </form>
//         <ul className="flex gap-4 list-none">
//           <li className={`hover:text-cyan-700 `}>
//             <a href="/" className="block py-1">
//               Home
//             </a>
//           </li>
//           <li className={`hover:text-cyan-700`}>
//             <a href="/about" className="block py-1">
//               About
//             </a>
//           </li>
//           <li className={`hover:text-cyan-700`}>
//             <a href="/sign-in" className="block py-1">
//               LogIn
//             </a>
//           </li>
//           <li>
//             <button className="bg-cyan-700 rounded-md px-3 py-1 text-white hover:scale-110 hover:transition-all">
//               <a href="/sign-up">Sign Up</a>
//             </button>
//           </li>
//         </ul>
//       </div>
//     </header>
//   );
// }

// export default Header;

import { useState } from "react";
import { NavLink } from "react-router-dom";
import ProfileDropDown from "./ProfileDropDown";

// Profile Dropdown

const Header = () => {
  const [menuState, setMenuState] = useState(false);

  // Replace javascript:void(0) path with your path
  const navigation = [
    { title: "Home", path: "/" },
    { title: "Properties", path: "javascript:void(0)" },
    { title: "About", path: "/about" },
    { title: "Help", path: "javascript:void(0)" },
  ];
  return (
    <nav className="bg-slate-200 shadow-md border-b">
      <div className="flex items-center space-x-8 py-3 px-4 max-w-screen-xl mx-auto md:px-8">
        <div className="flex-none md:flex-initial">
          <NavLink
            to="/"
            className={({ isActive, isPending }) =>
              `nav-link ${
                isActive ? "text-sky-700" : isPending ? "text-gray-600" : ""
              }`
            }
          >
            <img src={logo} alt="Float UI logo" className="w-20" />
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
                          ? "text-sky-700"
                          : isPending
                          ? "text-gray-600"
                          : ""
                      }`
                    }
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ProfileDropDown class="mt-5 pt-5 border-t border-gray-400 md:hidden" />
          </div>
          <div className="flex-1 flex items-center justify-end space-x-2 sm:space-x-6">
            <form className="flex items-center space-x-2 border bg-white rounded-md p-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 flex-none text-gray-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                className="w-full bg-transparent outline-none appearance-none placeholder-gray-500 text-gray-500 sm:w-auto"
                type="text"
                placeholder="Search"
              />
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
