import PropTypes from "prop-types";
import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileDropDown = (props) => {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    { title: "Settings", path: "javascript:void(0)" },
    { title: "Log out", path: "javascript:void(0)" },
  ];

  const authentication = [
    { title: "LogIn", path: "/sign-in" },
    { title: "SignUp", path: "/sign-up" },
  ];

  useEffect(() => {
    const handleDropDown = (e) => {
      if (!profileRef.current.contains(e.target)) setState(false);
    };
    document.addEventListener("click", handleDropDown);
  }, []);

  return (
    <div className={`relative ${props.class}`}>
      {/* <div className="flex items-center space-x-4">
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 md:focus:ring-indigo-600"
          onClick={() => setState(!state)}
        >
          <img
            src="https://randomuser.me/api/portraits/men/46.jpg"
            className="w-full h-full rounded-full"
          />
        </button>
        <div className="md:hidden">
          <span className="block">Micheal John</span>
          <span className="block text-sm text-gray-500">john@gmail.com</span>
        </div>
      </div>
      <ul
        className={`bg-transparent top-12 right-0 mt-5 space-y-5 md:bg-white md:absolute md:border md:rounded-md md:text-sm md:w-52 md:shadow-md md:space-y-0 md:mt-0 ${
          state ? "" : "md:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 md:hover:bg-gray-50 md:p-2.5"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul> */}
      <div className="bg-transparent space-y-5 top-16 left-0 md:static md:flex md:space-y-0 md:space-x-5 ">
        {/* {authentication.map((item, idx) => (
          <button key={idx} className="block bg-transparent w-full text-left ">
            <NavLink
              to={item.path}
              className={({ isActive, isPending }) =>
                `nav-link text-gray-600 hover:text-sky-600 md:border md:border-sky-600 md:px-2 md:py-1 md:rounded-md md:hover:bg-sky-600 md:hover:text-white ${
                  isActive
                    ? "text-sky-700 md:bg-sky-700 md:text-white"
                    : isPending
                    ? "text-gray-600"
                    : ""
                } ${
                  item.title === "SignUp"
                    ? "md:bg-sky-700 md:hover:scale-110 md:text-white"
                    : ""
                }`
              }
            >
              {item.title}
            </NavLink>
          </button>
        ))} */}

        <button className="block bg-transparent w-full text-left">
          <NavLink
            to="/sign-in"
            className={({ isActive, isPending }) =>
              `nav-link text-gray-600 hover:text-sky-600 md:border md:border-sky-600 md:px-2 md:py-1 md:rounded-md md:hover:bg-sky-600 md:hover:text-white md:transition-all ${
                isActive
                  ? "text-sky-700 md:text-gray-600"
                  : isPending
                  ? "text-gray-600"
                  : ""
              }`
            }
          >
            LogIn
          </NavLink>
        </button>

        <button className="block bg-transparent w-full text-left md:hover:scale-110 transition-all">
          <NavLink
            to="/sign-up"
            className={({ isActive, isPending }) =>
              `nav-link text-gray-600 hover:text-sky-600 md:border md:border-sky-700 md:px-2 md:py-1 md:rounded-md md:bg-sky-700 md:text-white md:hover:text-white ${
                isActive
                  ? "text-sky-700 md:text-white"
                  : isPending
                  ? "text-gray-600"
                  : ""
              }`
            }
          >
            SignUp
          </NavLink>
        </button>
      </div>
    </div>
  );
};

ProfileDropDown.propTypes = {
  class: PropTypes.string,
};

export default ProfileDropDown;
