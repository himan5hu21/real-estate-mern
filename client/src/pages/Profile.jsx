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

const Profile = () => {
  const currentUser = useSelector((state) => state.user.currentUser.user);
  const fileInputRef = useRef(null);
  const [editMode, setEditMode] = useState(false);
  const [userData, setUserData] = useState({
    username: currentUser?.username || "",
    email: currentUser?.email || "",
    phone: currentUser?.phone || "",
    address: currentUser?.address || "",
    preferences: currentUser?.preferences || "",
    avatar: currentUser?.avatar || "",
  });
  const [formData, setFormData] = useState(userData); // Holds the temporary user data
  const [newImage, setNewImage] = useState(null); // Holds the new image for preview
  const [file, setFile] = useState(undefined); // Holds the file name which going to upload to the firebase server
  const [filePerc, setFilePerc] = useState(0);
  const [fileUploadError, setFileUploadError] = useState(false);
  const [loading, setLoading] = useState(false);

  // firebase storage
  // allow read;
  // allow write: if
  // request.resource.size < 2 * 1024 * 1024 &&
  // request.resource.contentType.matches('image/.*')

  // useEffect(() => {
  //   if (file) {
  //     handleFileUpload(file);
  //   }
  // }, [file]);

  const handleFileUpload = (file) => {
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
        setLoading(true);
      },
      (error) => {
        setFileUploadError(true);
        setLoading(false);
        console.error(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          setUserData({ ...formData, avatar: downloadURL });
          setLoading(false);
          setEditMode(false);
        });
      }
    );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setNewImage(imageUrl); // Display preview of the new image
      setFile(file);
      console.log(imageUrl);
      // setNewImage(file); // Save the new image for upload later
    }
  };

  const toggleEditMode = () => {
    setEditMode(!editMode);
    setNewImage(null); // Reset image preview when exiting edit mode
  };

  const handleSave = () => {
    // Save the new profile image and other user data
    if (newImage) {
      handleFileUpload(file);
    } else {
      setUserData(formData);
      setEditMode(false);
    }
  };

  const handleCancel = () => {
    setEditMode(false);
    setNewImage(null); // Reset image preview if canceled
    setFormData(userData);
  };

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const userDataAndInput = (title, type, name, value) => {
    return (
      <div className="my-0">
        <label className="ml-2 block text-sm font-semibold text-gray-600">
          {title}
        </label>
        {editMode ? (
          <input
            type={type}
            name={name}
            value={value || ""}
            placeholder={`Enter your ${name}`}
            onChange={handleChange}
            className="mx-2 w-full px-4 py-2 mt-1 border rounded-lg focus:ring focus:ring-blue-200 outline-none"
          />
        ) : (
          <p className={`mx-2 text-lg text-gray-800`}>{value || "-"}</p>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 flex justify-center">
      <div className="bg-white shadow-lg rounded-lg overflow-hidden h-fit w-11/12 md:w-2/3 lg:w-1/2">
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
              <FaEdit className="hover:text-sky-50" />
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
                    src={newImage || userData.avatar}
                    alt="Profile Preview"
                    className="relative -mt-20 w-32 h-32 rounded-full object-cover border-4 bg-white border-white shadow-lg transition-transform transform hover:scale-105"
                  />
                </label>
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
                {/* File Input for Image */}
                <button
                  className="mt-3 px-3 py-2 text-white rounded-md bg-sky-700 hover:bg-sky-600 transition-colors duration-300"
                  onClick={handleClick}
                >
                  Change Image
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
                src={userData.avatar}
                alt="Profile"
                className="relative -mt-20 w-32 h-32 rounded-full object-cover border-4 bg-white border-white shadow-lg transition-transform transform hover:scale-105"
              />
            )}
          </div>

          {/* User Info */}
          <div className="space-y-6">
            {userDataAndInput(
              "Username",
              "text",
              "username",
              userData.username
            )}
            <hr />
            {userDataAndInput(
              "Email",
              "text",
              "email",
              editMode ? formData.email : userData.email
            )}
            <hr />
            {userDataAndInput(
              "Phone",
              "tel",
              "phone",
              editMode ? formData.phone : userData.phone
            )}
            <hr />
            {userDataAndInput(
              "Address",
              "text",
              "address",
              editMode ? formData.address : userData.address
            )}
            <hr />
            {userDataAndInput(
              "Preferences",
              "text",
              "preferences",
              editMode ? formData.preferences : userData.preferences
            )}
            {!editMode && <hr />}
          </div>

          {/* Action Buttons */}
          {editMode && (
            <div className="mt-8 flex justify-end space-x-4">
              <button
                className="flex items-center px-5 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors"
                onClick={handleSave}
                disabled={loading}
              >
                {loading ? (
                  <>
                    <BlocksShuffle2 className="w-6 h-6" /> Saving...
                  </>
                ) : (
                  <>
                    <FaSave className="mr-2" />
                    Save
                  </>
                )}
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

          <div className="flex gap-4 justify-between mt-6">
            <button
              className="flex items-center px-5 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              // onClick={handleDeleteAccount}
            >
              <FaTimes className="mr-2" />
              Delete Account
            </button>
            <button
              className="flex items-center px-5 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              // onClick={handleLogout}
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
