import { Form } from "react-router-dom";
import BlocksShuffle2 from "../assets/svgs/blocks-shuffle-2";
import useAuth from "../hooks/useAuth";
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../store/user/userSlice";
import { useSelector } from "react-redux";
import QAuth from "../components/QAuth";

function SignUp() {
  const { loading, error } = useSelector((state) => state.user);
  const { handleAuth } = useAuth();

  const excludeKeywords = ["username", "email", "created"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    handleAuth(
      "/api/auth/signup",
      formData,
      signUpStart,
      signUpSuccess,
      signUpFailure,
      "/sign-in"
    );
  };

  const renderInputField = (
    label,
    type,
    name,
    placeholder,
    autoComplete,
    isError
  ) => (
    <div>
      <label className="font-medium">{label}</label>
      <input
        type={type}
        required
        className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg ${
          isError ? "border-red-500" : "focus:border-sky-700"
        }`}
        id={name}
        name={name}
        placeholder={placeholder}
        autoComplete={autoComplete}
      />
      {isError && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );

  const isError = (keyword) => error?.toLowerCase().includes(keyword);

  return (
    <section>
      <main className="w-full h-screen flex flex-col items-center justify-center bg-gray-50 sm:px-4">
        <div className="w-full space-y-6 text-gray-600 sm:max-w-md">
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
                "Username",
                "username",
                isError("username")
              )}
              {renderInputField(
                "Email",
                "email",
                "email",
                "Email",
                "email",
                isError("email")
              )}
              {renderInputField(
                "Password",
                "password",
                "password",
                "Password",
                "current-password",
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
