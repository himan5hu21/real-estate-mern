import { useEffect, useState } from "react";

const useDropdown = (ref) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleDropdownToggle = () => setIsOpen((prev) => !prev);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [ref]);

  return { isOpen, handleDropdownToggle, setIsOpen };
};

export default useDropdown;
