import GoogleLogo from "../assets/svgs/google-logo";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from "../firebase/firebaseConfig";
import axios from "axios";
import { useDispatch } from "react-redux";
import { signInSuccess } from "../store/user/userSlice";
import { useNavigate } from "react-router-dom";

function QAuth() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleOnClick = async () => {
    // Call the OAuth API to get the access token
    // Then, redirect the user to the sign-in page with the access token
    try {
      const provider = new GoogleAuthProvider();
      const auth = getAuth(app);

      const result = await signInWithPopup(auth, provider);
      console.log("Successfully signed in with Google", result);

      const res = await axios({
        method: "POST",
        url: `api/auth/google`,
        data: JSON.stringify({
          name: result.user.displayName,
          email: result.user.email,
          imageUrl: result.user.photoURL,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.data;
      dispatch(signInSuccess(data));
      navigate("/", { replace: true });
    } catch (error) {
      console.log("Could not sign in with Google", error);
    }
  };

  return (
    <div className="mt-5">
      <button
        type="button"
        onClick={handleOnClick}
        className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100"
      >
        <GoogleLogo />
        Continue with Google
      </button>
    </div>
  );
}

export default QAuth;
