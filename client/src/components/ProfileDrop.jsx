import { useEffect, useRef, useState } from "react";

function ProfileDrop() {
  const [state, setState] = useState(false);
  const profileRef = useRef();

  const navigation = [
    { title: "Dashboard", path: "/" },
    { title: "Settings", path: "/" },
    { title: "Log out", path: "/" },
  ];

  useEffect(() => {
    const handleDropDown = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setState(false);
      }
    };

    document.addEventListener("mousedown", handleDropDown);

    return () => {
      document.removeEventListener("mousedown", handleDropDown);
    };
  }, [profileRef]);
  return (
    <>
      <div className="flex items-center space-x-4">
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
      </ul>
    </>
  );
}

export default ProfileDrop;
