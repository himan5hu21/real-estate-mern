import PropTypes from "prop-types";
import { NavLink, useNavigate } from "react-router-dom";
import { MdArrowForwardIos } from "react-icons/md";
import ProfileDrop from "./ProfileDrop";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../store/menu/menuSlice";
import useMobileScreen from "../hooks/useMobileScreen";
import { useSelector } from "react-redux";
import classNames from "classnames";

const ProfileDropDown = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isMobile = useMobileScreen();
  const { currentUser } = useSelector((state) => state.user);

  const handleToggleMenu = () => {
    if (isMobile) {
      dispatch(toggleMenu());
    }
    navigate("/sign-in");
  };

  const siginInButtonClasses = classNames(
    { "w-full": isMobile },
    "block bg-transparent w-auto text-left md:w-28 md:mx-auto transition-all text-gray-600 hover:text-sky-600",
    "md:border md:border-sky-700 md:px-5 md:py-2 md:rounded-full md:bg-sky-700 md:hover:border-sky-600 md:hover:bg-sky-600 md:text-white md:hover:text-white"
  );

  const navLinkClasses = ({ isActive, isPending }) =>
    classNames(
      "nav-link flex items-center content-center gap-1 font-medium transition-colors duration-300",
      {
        "block px-4 py-2 rounded-md ": isMobile,
        "bg-sky-700 text-white": isActive && isMobile,
        "text-sky-700 border-b-2 border-sky-700 md:text-white md:border-none":
          isActive && !isMobile,
        "text-gray-600": isPending,
        "text-gray-600 hover:bg-sky-600 hover:text-white":
          !isActive && isMobile,
      }
    );

  return (
    <div className={`relative ${props.class}`}>
      {currentUser ? (
        <ProfileDrop avatar={currentUser.avatar} />
      ) : (
        <div className="bg-transparent space-y-5 top-16 left-0 md:static md:flex md:space-y-0 md:space-x-5 ">
          <button
            className={siginInButtonClasses}
            onClick={handleToggleMenu}
            aria-label="Sign in"
          >
            <NavLink to="/sign-in" className={navLinkClasses}>
              <p>Sign in</p>
              <MdArrowForwardIos className="text-base font-medium" />
            </NavLink>
          </button>
        </div>
      )}
    </div>
  );
};

ProfileDropDown.propTypes = {
  class: PropTypes.string,
};

export default ProfileDropDown;
