import { Form } from "react-router-dom";
import BlocksShuffle2 from "../assets/svgs/blocks-shuffle-2";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../store/user/userSlice";
import useAuth from "../hooks/useAuth";
import GoogleLogo from "../assets/svgs/google-logo";

function SignIn() {
  const { loading, error } = useSelector((state) => state.user);
  const { handleAuth } = useAuth();

  const excludeKeywords = ["username", "email"];

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    handleAuth(
      "/api/auth/signin",
      formData,
      signInStart,
      signInSuccess,
      signInFailure,
      "/"
    );
  };

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
                Sign In
              </h3>
            </div>
          </div>
          <div className="bg-white shadow p-4 py-6 sm:p-6 sm:rounded-lg">
            <Form method="POST" onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg ${
                    error ? "border-red-500" : "focus:border-sky-700"
                  }`}
                  id="Email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg ${
                    error ? "border-red-500" : "focus:border-sky-700"
                  }`}
                  id="Password"
                  name="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
              </div>
              {!excludeKeywords.some((keyword) =>
                error?.toLowerCase().includes(keyword)
              ) &&
                error?.trim().length > 0 && (
                  <div className="text-red-500 text-sm">{error}</div>
                )}
              <button
                disabled={loading}
                className="w-full px-4 py-2 text-white font-medium bg-sky-700 hover:bg-sky-600 active:bg-sky-700 rounded-lg duration-150 flex items-center justify-center"
              >
                {loading ? <BlocksShuffle2 className="w-6 h-6" /> : "Sign In"}
              </button>
              <div className="text-center">
                <NavLink
                  to="/forgot"
                  className={`text-sky-700 hover:border-b-2 hover:border-sky-700 font-bold`}
                >
                  Forgot your password?
                </NavLink>
              </div>
            </Form>
            <span className="flex items-center mt-5">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-6">Or continue with</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>
            <div className="mt-5">
              <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <GoogleLogo />
                Continue with Google
              </button>
            </div>
            <div className="text-center mt-10">
              <p className="">
                Already have an account?{" "}
                <a
                  href="/sign-up"
                  className="font-medium text-sky-700 hover:text-sky-600"
                >
                  Sign Up
                </a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </section>
  );
}

export default SignIn;
