import axios from "axios";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleAuth = async (
    url,
    formData,
    startAction,
    successAction,
    failureAction,
    navigateTo
  ) => {
    dispatch(startAction());

    try {
      const res = await axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await res.data;
      if (!data.success) {
        dispatch(failureAction(data.message));
        console.error(data.message);
        return;
      }
      dispatch(successAction(data));
      navigate(navigateTo, { replace: true });
    } catch (err) {
      const errorMessage =
        err.response?.data?.message ||
        "Failed to authenticate due to an internal error. Please try again later.";
      dispatch(failureAction(errorMessage));
    }
  };

  return { handleAuth };
};

export default useAuth;
