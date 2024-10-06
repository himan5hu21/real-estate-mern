import PropTypes from "prop-types";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import useMobileScreen from "../hooks/useMobileScreen";
import { toggleMenu } from "../store/menu/menuSlice";
import { logout } from "../store/user/userSlice";
import classNames from "classnames";
import useDropdown from "../hooks/useDropDown";

const ProfileDrop = React.memo((prop) => {
  const profileRef = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isMobile = useMobileScreen();
  const { currentUser } = useSelector((state) => state.user);
  const user = currentUser?.user;

  const { isOpen, handleDropdownToggle, setIsOpen } = useDropdown(profileRef);

  const navigation = [
    { title: "My Profile", path: "/profile" },
    { title: "Settings", path: "/settings" },
    { title: "Log out", path: "#logout" },
  ];

  const handleLinkClick = () => {
    setIsOpen(false);
    if (isMobile) {
      dispatch(toggleMenu());
    }
  };

  const handleLogout = () => {
    document.cookie =
      "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    dispatch(logout());
    // Optionally clear cookies or tokens
    // document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    handleLinkClick();
    navigate("/", { replace: true });
  };

  return (
    <>
      <div className={`${prop.class} flex items-center space-x-4`}>
        <button
          ref={profileRef}
          className="w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 ring-2 md:focus:ring-sky-700"
          onClick={handleDropdownToggle}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {user?.avatar ? (
            <img src={user.avatar} className="w-full h-full rounded-full" />
          ) : (
            <div className="w-full h-full rounded-full bg-gray-300"></div>
          )}
        </button>
        <div className="md:hidden">
          <span className="block">{user?.username}</span>
          <span className="block text-sm text-gray-500">{user?.email}</span>
        </div>
      </div>
      <ul
        className={classNames(
          "bg-transparent top-12 right-0 mt-5 space-y-5 md:bg-white md:absolute md:border md:rounded-md md:text-sm md:w-52 md:shadow-md md:space-y-0 md:mt-0 md:z-50",
          { "md:hidden": !isOpen, block: isOpen }
        )}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <NavLink
              to={item.path}
              onClick={
                item.title === "Log out" ? handleLogout : handleLinkClick
              }
              className={({ isActive }) =>
                classNames(
                  "block px-4 py-2  rounded-md transition-colors duration-300",
                  {
                    "text-gray-600": !isActive,
                    "bg-sky-700 text-white md:bg-sky-700":
                      isActive && item.title !== "Log out",
                    "hover:bg-sky-600 hover:text-white md:hover:bg-gray-50 md:hover:text-gray-600":
                      !isActive && item.title !== "Log out",
                    "text-gray-500 md:hover:bg-gray-50 md:hover:text-gray-600":
                      isActive && item.title === "Log out" && !isMobile,
                    "bg-transparent text-gray-500 hover:text-white hover:bg-sky-600":
                      item.title === "Log out" && isActive && isMobile,
                  }
                )
              }
            >
              {item.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
});

ProfileDrop.displayName = "Profile";

ProfileDrop.propTypes = {
  class: PropTypes.string,
};
export default ProfileDrop;
