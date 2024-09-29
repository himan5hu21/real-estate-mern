import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
// import ProfileDrop from "./ProfileDrop";

const ProfileDropDown = (props) => {
  return (
    <div className={`relative ${props.class}`}>
      {/* <ProfileDrop /> */}

      <div className="bg-transparent space-y-5 top-16 left-0 md:static md:flex md:space-y-0 md:space-x-5 ">
        <button className="block bg-transparent w-full text-left md:w-28 md:mx-auto transition-all text-gray-600 hover:text-sky-600 md:border md:border-sky-700 md:px-5 md:py-2 md:rounded-full md:bg-sky-700 md:hover:border-sky-600 md:hover:bg-sky-600 md:text-white md:hover:text-white">
          <NavLink
            to="/sign-in"
            className={({ isActive, isPending }) =>
              `nav-link flex items-center content-center gap-1 font-medium  ${
                isActive
                  ? "text-sky-700 md:text-white"
                  : isPending
                  ? "text-gray-600"
                  : ""
              }`
            }
          >
            <p>Sign in</p>
            <MdArrowForwardIos className="text-base font-medium" />
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
