import { Form } from "react-router-dom";
import BlocksShuffle2 from "../assets/svgs/blocks-shuffle-2";
import useAuth from "../hooks/useAuth";
import {
  requestStart,
  requestFailure,
  signUpSuccess,
} from "../store/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import QAuth from "../components/QAuth";
import useProfileForm from "../hooks/useProfileForm";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

function SignUp() {
  const { loading, error } = useSelector((state) => state.user);
  const { handleAuth } = useAuth();
  const { formData, handleChange } = useProfileForm();
  const dispatch = useDispatch();

  const [showPassword, setShowPassword] = useState({
    username: false,
    email: false,
    password: false,
    confirmPassword: false,
  });

  const excludeKeywords = ["username", "email", "created"];

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);

    if (formData.password !== formData.confirmPassword) {
      dispatch(requestFailure("Confirm password do not match"));
      return;
    }

    delete formData.confirmPassword;
    handleAuth(
      "/api/auth/signup",
      formData,
      requestStart,
      signUpSuccess,
      requestFailure,
      "/sign-in"
    );
  };

  const toggleShowPassword = (field) => {
    setShowPassword((prev) => ({
      ...prev,
      [field]: !prev[field],
    }));
  };

  const renderInputField = (
    label,
    type,
    name,
    visible,
    placeholder,
    autoComplete,
    isError
  ) => (
    <div className="relative">
      <label className="font-medium">{label}</label>
      <div className="relative w-full mt-2">
        <input
          type={visible ? "text" : type}
          required
          className={`w-full px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg ${
            isError ? "border-red-500" : "focus:ring focus:ring-sky-700"
          }`}
          id={name}
          name={name}
          value={formData?.[name] || ""}
          onChange={handleChange}
          placeholder={placeholder}
          autoComplete={autoComplete}
        />
        {name === "password" || name === "confirmPassword" ? (
          <span
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer opacity-70"
            onClick={() => toggleShowPassword(name)}
          >
            {visible ? <FaEyeSlash /> : <FaEye />}
          </span>
        ) : (
          <></>
        )}
      </div>
      {isError && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );

  const isError = (keyword) => error?.toLowerCase().includes(keyword);

  return (
    <section>
      <main className="w-full flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full my-10 space-y-6 text-gray-600 sm:max-w-md">
          <div className="text-center">
            <h1 className="text-3xl text-center font-bold mx-auto">
              Welcome to <span className="text-sky-700">Key</span>
              <span className="text-slate-700">Haven</span>
            </h1>
            <div className="mt-5 space-y-2">
              <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">
                Sign up
              </h3>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <Form method="POST" onSubmit={handleSubmit} className="space-y-5">
              {renderInputField(
                "Username",
                "text",
                "username",
                showPassword.username,
                "Username",
                "username",
                isError("username")
              )}
              {renderInputField(
                "Email",
                "email",
                "email",
                showPassword.email,
                "Email",
                "email",
                isError("email") // Check if there's an error for email
              )}

              {renderInputField(
                "Password",
                "password",
                "password",
                showPassword.password,
                "Password",
                "current-password",
                false
              )}

              {renderInputField(
                "Confirm Password",
                "password",
                "confirmPassword",
                showPassword.confirmPassword,
                "Confirm Password",
                "confirmPassword",
                false
              )}
              {!excludeKeywords.some((keyword) => isError(keyword)) &&
                error?.trim().length > 0 && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
              <button
                disabled={loading}
                className="w-full px-4 py-2 text-white font-medium bg-sky-700 hover:bg-sky-600 active:bg-sky-700 rounded-lg duration-150 flex items-center justify-center"
              >
                {loading ? <BlocksShuffle2 className="w-6 h-6" /> : "Sign Up"}
              </button>
            </Form>
            <span className="flex items-center mt-5">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-6">Or continue with</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>
            <QAuth />
            <div className="text-center mt-10">
              <p className="">
                Already have an account?{" "}
                <a
                  href="/sign-in"
                  className="font-medium text-sky-700 hover:text-sky-600"
                >
                  Log in
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SignUp;
