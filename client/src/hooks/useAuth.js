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
      const config = {
        "Content-Type": "application/json",
      };

      const res = await axios({
        method: "POST",
        url,
        data: JSON.stringify(formData),
        headers: config,
      });

      const data = await res.data;
      if (data.success === false) {
        dispatch(failureAction(data.message));
        console.error(data.message);
        return;
      }
      dispatch(successAction(data));
      navigate(navigateTo, { replace: true });
    } catch (err) {
      if (err.response && err.response.data && err.response.data.message) {
        dispatch(failureAction(err.response.data.message));
      } else {
        dispatch(
          failureAction(
            "Failed to authenticate due to an internal error. Please try again later."
          )
        );
      }
    }
  };

  return { handleAuth };
};

export default useAuth;
