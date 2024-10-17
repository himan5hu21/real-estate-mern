import { useState } from "react";
import { useDispatch } from "react-redux";
import {
  requestFailure,
  requestStart,
  updatePasswordSuccess,
} from "../store/user/userSlice";
import { updatePassword } from "../services/service";

const useChangePassword = (currentUser) => {
  const [isPasswordModalOpen, setIsPasswordModalOpen] = useState(false);
  const dispatch = useDispatch();

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
      const res = await updatePassword(currentUser._id, {
        currentPassword,
        newPassword,
      });

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

  return {
    isPasswordModalOpen,
    handlePasswordModalOpen,
    handlePasswordModalClose,
    handlePasswordChange,
  };
};

export default useChangePassword;
