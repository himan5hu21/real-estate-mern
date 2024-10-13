import { useState, useRef } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";
import { useSelector } from "react-redux";
import {
  getDownloadURL,
  getStorage,
  ref,
  uploadBytesResumable,
} from "firebase/storage";
import { app } from "../firebase/firebaseConfig";
import BlocksShuffle2 from "../assets/svgs/blocks-shuffle-2";
import {
  requestStart,
  updateUserSuccess,
  requestFailure,
  updatePasswordSuccess,
  signOutSuccess,
} from "../store/user/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";
import PasswordModal from "../components/PasswordModel";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { currentUser } = useSelector((state) => state.user);
  const requiredFields = ["username", "email"];
  const fileInputRef = useRef(null);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(currentUser); // Holds the temporary user data
  const [newImage, setNewImage] = useState(null); // Holds the new image for preview
  const [file, setFile] = useState(undefined); // Holds the file name which going to upload to the firebase server
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const { loading, error } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // firebase storage
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  const handleFileUpload = (file) => {
    return new Promise((resolve, reject) => {
      const storage = getStorage(app);
      const timestamp = new Date().getTime();
      const fileName = `${timestamp}_${file.name}`;
      const storageRef = ref(storage, fileName);

      const uploadTask = uploadBytesResumable(storageRef, file);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setFilePerc(Math.round(progress));
        },
        (error) => {
          setFileUploadError(true);
          dispatch(requestFailure(error.message));
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);

          resolve(downloadURL);
        }
      );
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const trueValue = value.trim().length > 0 ? value : "";
    setFormData({
      ...formData,
      [name]: trueValue,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file); // Temporary URL for image preview
      setNewImage(imageUrl); // Display preview of the new image
      setFile(file);
    }
  };

  const toggleEditMode = () => {
    setIsEditing(!isEditing);
    setFormData(currentUser);
    setNewImage(null); // Reset image preview when exiting edit mode
    setFileUploadError(false);
    setFilePerc(0);
  };

  const handleCancel = () => {
    toggleEditMode();
    dispatch(requestFailure("Canceled by the user"));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(requestStart());

    try {
      let updatedFormData = { ...formData };

      if (newImage) {
        const downloadURL = await handleFileUpload(file);
        updatedFormData = { ...formData, avatar: downloadURL };
      }

      const res = await axios.patch(
        `/api/user/update/${currentUser._id}`,
        updatedFormData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.data;
      if (!data.success) {
        dispatch(requestFailure(data.message));
        return;
      }
      dispatch(updateUserSuccess(data));
      toggleEditMode();
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to authenticate due to an internal error. Please try again later.";
      dispatch(requestFailure(errorMessage));
    }
  };

  const handlePasswordModalOpen = () => {
    setIsPasswordModalOpen(true);
  };

  const handlePasswordModalClose = () => {
    setIsPasswordModalOpen(false);
  };

  const handlePasswordChange = async (passwords) => {
    dispatch(requestStart());
    try {
      const { currentPassword, newPassword } = passwords;
      const res = await axios.patch(
        `/api/user/update/password/${currentUser._id}`,
        { currentPassword, newPassword },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await res.data;
      if (!data.success) {
        dispatch(requestFailure(data.message));
        return { success: false, message: data.message };
      }
      dispatch(updatePasswordSuccess(data));
      handlePasswordModalClose();
      return { success: true };
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to authenticate due to an internal error. Please try again later.";
      dispatch(requestFailure(errorMessage));
      return { success: false, errorMessage };
    }
  };

  const handleDeleteAccount = async () => {
    dispatch(requestStart());
    try {
      const res = await axios.delete(`/api/user/delete/${currentUser._id}`);
      const data = await res.data;
      if (!data.success) {
        dispatch(requestFailure(data.message));
        return;
      }
      dispatch(signOutSuccess());
      navigate("/", { replace: true });
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to authenticate due to an internal error. Please try again later.";
      dispatch(requestFailure(errorMessage));
    }
  };

  const handleLogOut = async () => {
    dispatch(requestStart());
    requestStart();
    try {
      const res = await axios.get("/api/auth/signout");
      const data = await res.data;
      if (!data.success) {
        requestFailure(data.message);
        return;
      }
      dispatch(signOutSuccess());
      navigate("/", { replace: true });
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to authenticate due to an internal error. Please try again later.";
      dispatch(requestFailure(errorMessage));
    }
  };

  const isError = (keyword) => error?.toLowerCase().includes(keyword);

  const userInput = (title, type, name, value, isError) => (
    <div className="flex flex-col">
      <label className="text-sm font-medium text-gray-600">{title}</label>
      {isEditing ? (
        <>
          <input
            type={type}
            name={name}
            value={value || ""}
            onChange={handleChange}
            placeholder={`Enter your ${name}`}
            className="mt-1 p-2 border rounded-md outline-none focus:ring focus:ring-sky-700"
            required={requiredFields.includes(name)}
          />
          {isError && <div className="text-red-500 text-sm mt-1">{error}</div>}
        </>
      ) : (
        <span className="mt-1 text-gray-800">{value || "-"}</span>
      )}
    </div>
  );

  const buttonsAndLabel = (title, value, handleClick) => (
    <div className="flex justify-between items-center mb-4">
      <div className="text-sm font-medium text-gray-600">{title}</div>
      <button
        onClick={handleClick}
        className={`w-36 border-2 border-sky-700 hover:bg-sky-700  text-sky-700 hover:text-white px-3 py-1 rounded-md text-sm transition-all duration-300`}
      >
        {value}
      </button>
    </div>
  );

  return (
    <div className="container mx-auto p-4 md:p-8 bg-gray-100">
      {/* Profile Photo Section */}
      <form onSubmit={handleSubmit}>
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 text-center">
          <h2 className="text-xl font-semibold mb-6">Profile Photo</h2>
          <div className="relative mb-4">
            <img
              src={
                newImage ||
                currentUser.avatar ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
              className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-gray-300 shadow-lg hover:scale-105 hover:transition-transform duration-300"
            />
            {isEditing && (
              <>
                <p>
                  {fileUploadError ? (
                    <span className="text-red-700">
                      Error image upload (image must be less than 2 mb)
                    </span>
                  ) : filePerc > 0 && filePerc < 100 ? (
                    <span className="text-slate-700">
                      {`Uploading ${filePerc}%`}
                    </span>
                  ) : filePerc === 100 ? (
                    <span className="text-green-700">
                      Image successfully uploaded!
                    </span>
                  ) : (
                    ""
                  )}
                </p>
                <label className="block mt-4">
                  <span className="inline-block px-4 py-2 border-2 border-sky-700 hover:bg-sky-700 text-sky-700 hover:text-white font-semibold rounded-md cursor-pointer transition-all duration-300">
                    Upload Photo
                    <input
                      id="image-upload"
                      type="file"
                      accept="image/*"
                      className="hidden"
                      onChange={handleImageChange}
                      ref={fileInputRef}
                    />
                  </span>
                </label>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="mt-4 text-sm hidden"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
              </>
            )}
          </div>
        </div>

        {/* Personal Info Section */}
        <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
          <h2 className="text-xl font-semibold mb-6">Personal Info</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {userInput(
              "Name",
              "text",
              "name",
              isEditing ? formData.name : currentUser.name,
              false
            )}
            {userInput(
              "Username",
              "text",
              "username",
              isEditing ? formData.username : currentUser.username,
              isError("username")
            )}
            {userInput(
              "Email",
              "email",
              "email",
              isEditing ? formData.email : currentUser.email,
              isError("email")
            )}
            {userInput(
              "Phone",
              "tel",
              "phone",
              isEditing ? formData.phone : currentUser.phone,
              isError("phone")
            )}
            {userInput(
              "Preferences",
              "text",
              "preferences",
              isEditing ? formData.preferences : currentUser.preferences,
              false
            )}
          </div>

          {/* Save and Cancel Buttons */}
          {isEditing && (
            <div className="mt-6 flex space-x-4">
              <button
                type="submit"
                className="flex items-center border-2 border-sky-700 text-sky-700 px-4 py-2 rounded-md hover:bg-sky-700 hover:text-white transition-colors duration-300"
              >
                {loading ? (
                  <>
                    <BlocksShuffle2 className="w-6 h-6 mr-2 hover:text-sky-700" />
                    Saving...
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" />
                    Save Changes
                  </>
                )}
              </button>
              <button
                type="button"
                onClick={handleCancel}
                className="flex items-center border-2 border-gray-500 text-gray-500 px-4 py-2 rounded-md hover:bg-gray-500 hover:text-white transition-colors duration-300"
              >
                <FaTimes className="mr-2" />
                Cancel
              </button>
            </div>
          )}

          {!isEditing && (
            <div className="mt-6">
              <button
                onClick={toggleEditMode}
                className="flex items-center border-2 border-sky-700 text-sky-700 px-4 py-2 rounded-md hover:bg-sky-700 hover:text-white transition-colors duration-300"
              >
                <FaEdit className="mr-2" />
                Edit Profile
              </button>
            </div>
          )}
        </div>
      </form>

      {/* Sign in & Security Section */}
      <div className="max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-6">Sign in & Security</h2>

        {buttonsAndLabel(
          "Password",
          "Change password",
          handlePasswordModalOpen
        )}
        {buttonsAndLabel(
          "Delete My Accout",
          "Delete Account",
          handleDeleteAccount
        )}
        {buttonsAndLabel("Log Out", "Log Out", handleLogOut)}
      </div>

      {/* Render the Password Modal */}
      <PasswordModal
        isOpen={isPasswordModalOpen}
        onClose={handlePasswordModalClose}
        onSubmit={handlePasswordChange}
      />
    </div>
  );
};

export default Profile;
