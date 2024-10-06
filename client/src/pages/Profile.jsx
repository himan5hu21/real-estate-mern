import { useState, useRef } from "react";
import { FaEdit, FaSave, FaTimes } from "react-icons/fa";

const Profile = () => {
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    name: "Himanshu Devaiya",
    email: "himanshu@realestate.com",
    phone: "+91-9876543210",
    address: "Ahmedabad, India",
    preferences: "3BHK Apartments, Commercial Properties",
    profileImage: "https://via.placeholder.com/150", // Default placeholder image
  });
  const [newImage, setNewImage] = useState(null); // Holds the new image

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl); // Display preview of the new image
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setNewImage(null); // Reset image preview when exiting edit mode
  };

  const handleSave = () => {
    // Save the new profile image and other user data
    if (newImage) {
      setUserData((prevData) => ({
        ...prevData,
        profileImage: newImage, // Save the new image
      }));
    }
    setEditMode(false);
  };

  const handleCancel = () => {
    setEditMode(false);
    setNewImage(null); // Reset image preview if canceled
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const userDataAndInput = (title, type, name, value) => {
    return (
      <div>
        <label className="block text-sm font-semibold text-gray-600">
          {title}
        </label>
        {editMode ? (
          <input
            type={type}
            name={name}
            value={value}
            onChange={handleChange}
            className="w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
          />
        ) : (
          <p className="text-lg text-gray-800">{value}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden w-11/12 md:w-2/3 lg:w-1/2">
        {/* Profile Header */}
        <div className="relative bg-gradient-to-r from-sky-500 to-sky-700 h-36 flex justify-center items-center">
          <h2 className="text-white text-3xl font-bold tracking-wide">
            My Profile
          </h2>
          {!editMode && (
            <button
              className="absolute top-5 right-5 text-white text-xl focus:outline-none"
              onClick={toggleEditMode}
              title="Edit Profile"
            >
              <FaEdit />
            </button>
          )}
        </div>

        <div className="p-8">
          {/* Profile Image */}
          <div className="flex justify-center mb-8">
            {editMode ? (
              <div className="flex flex-col items-center">
                {/* Image Preview */}
                <label htmlFor="image-upload">
                  <img
                    src={newImage || userData.profileImage}
                    alt="Profile Preview"
                    className="relative -mt-20 w-32 h-32 rounded-full object-cover border-4 bg-white border-white shadow-lg transition-transform transform hover:scale-105"
                  />
                </label>
                {/* File Input for Image */}
                <button
                  className="mt-3 px-3 py-2 text-white rounded-md bg-sky-700 hover:bg-sky-600 transition-colors duration-300"
                  onClick={handleClick}
                >
                  Upload Image
                </button>
                <input
                  id="image-upload"
                  type="file"
                  accept="image/*"
                  className="mt-4 text-sm hidden"
                  onChange={handleImageChange}
                  ref={fileInputRef}
                />
              </div>
            ) : (
              <img
                src={userData.profileImage}
                alt="Profile"
                className="relative -mt-20 w-32 h-32 rounded-full object-cover border-4 bg-white border-white shadow-lg transition-transform transform hover:scale-105"
              />
            )}
          </div>

          {/* User Info */}
          <div className="space-y-6">
            {userDataAndInput("Name", "text", "name", userData.name)}
            <hr />
            {userDataAndInput("Email", "text", "email", userData.email)}
            <hr />
            {userDataAndInput("Phone", "tel", "phone", userData.phone)}
            <hr />
            {userDataAndInput("Address", "text", "address", userData.address)}
            <hr />
            {userDataAndInput(
              "Preferences",
              "text",
              "preferences",
              userData.preferences
            )}
          </div>

          {/* Action Buttons */}
          {editMode && (
            <div className="mt-8 flex justify-end space-x-4">
              <button
                className="flex items-center px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                onClick={handleSave}
              >
                <FaSave className="mr-2" />
                Save
              </button>
              <button
                className="flex items-center px-5 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
                onClick={handleCancel}
              >
                <FaTimes className="mr-2" />
                Cancel
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
