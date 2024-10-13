import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import BlocksShuffle2 from "../assets/svgs/blocks-shuffle-2";

const PasswordModal = ({ isOpen, onClose, onSubmit }) => {
  const { loading, error } = useSelector((state) => state.user);

  const [passwords, setPasswords] = useState({
    username: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState({
    currentPassword: false,
    newPassword: false,
    confirmPassword: false,
  });

  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const handleCancel = () => {
    onClose();
    setPasswords({
      username: "",
      currentPassword: "",
      newPassword: "",
      confirmPassword: "",
    });
    setErrorMessage("");
    setShowPassword({
      currentPassword: false,
      newPassword: false,
      confirmPassword: false,
    });
    onClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validation and submit logic here
    if (passwords.newPassword !== passwords.confirmPassword) {
      setErrorMessage("Confirm password do not match.");
      return;
    }

    // Clear error if passwords match
    setErrorMessage("");
    const val = await onSubmit(passwords);
    if (val.success) {
      handleCancel();
    }
  };

  const passwordInputs = (title, name, visible, value) => (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {title}
      </label>
      <div className="relative">
        <input
          type={visible ? "text" : "password"}
          name={name}
          value={value}
          onChange={handleChange}
          className="w-full p-2 border rounded-md focus:ring focus:ring-sky-600 outline-none"
          placeholder={`Enter ${title}`}
          autoComplete="new-password"
          required
        />
        <span
          className="absolute right-4 top-3 text-gray-600 cursor-pointer opacity-70"
          onClick={() => toggleShowPassword(name)}
        >
          {visible ? <FaEyeSlash /> : <FaEye />}
        </span>
      </div>
    </div>
  );

  return (
    isOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
        <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full">
          <h2 className="text-xl font-semibold mb-4">Change Password</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              value={passwords.username}
              onChange={handleChange}
              autoComplete="username"
              style={{ display: "none" }} // Hidden field
            />

            {/* Current Password Input */}
            {passwordInputs(
              "Current Password",
              "currentPassword",
              showPassword.currentPassword,
              passwords.currentPassword
            )}
            {passwordInputs(
              "New Password",
              "newPassword",
              showPassword.newPassword,
              passwords.newPassword
            )}
            {passwordInputs(
              "Confirm Password",
              "confirmPassword",
              showPassword.confirmPassword,
              passwords.confirmPassword
            )}

            {(errorMessage || error) && (
              <p className="text-red-500 text-sm mb-4">
                {errorMessage || error}
              </p>
            )}

            {/* Action Buttons */}
            <div className="flex justify-end space-x-4">
              <button
                type="button"
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 hover:bg-gray-200 text-gray-700 rounded-md transition-colors duration-300"
              >
                Cancel
              </button>
              <button
                type="submit"
                className="w-1/2 flex justify-center px-4 py-2 bg-sky-700 hover:bg-sky-600 text-white rounded-md transition-colors duration-300"
              >
                {loading ? (
                  <BlocksShuffle2 className="w-6 h-6" />
                ) : (
                  <>Change Password</>
                )}
              </button>
            </div>
          </form>
        </div>
      </div>
    )
  );
};

PasswordModal.propTypes = {
  isOpen: PropTypes.bool,
  onClose: PropTypes.func,
  onSubmit: PropTypes.func,
};

export default PasswordModal;
