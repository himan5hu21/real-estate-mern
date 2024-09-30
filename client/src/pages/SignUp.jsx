import { Form } from "react-router-dom";
import BlocksShuffle2 from "../assets/svgs/blocks-shuffle-2";
import useAuth from "../hooks/useAuth";
import {
  signUpFailure,
  signUpStart,
  signUpSuccess,
} from "../store/user/userSlice";
import { useSelector } from "react-redux";
import GoogleLogo from "../assets/svgs/google-logo";

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
              <div>
                <label className="font-medium">Username</label>
                <input
                  type="text"
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg ${
                    error?.toLowerCase().includes("username")
                      ? "border-red-500"
                      : "focus:border-sky-700"
                  }`}
                  id="Username"
                  name="username"
                  placeholder="Username"
                  autoComplete="username"
                />
                {error?.toLowerCase().includes("username") && (
                  <div className="text-red-500 text-sm mt-1">{error}</div>
                )}
              </div>

              <div>
                <label className="font-medium">Email</label>
                <input
                  type="email"
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border shadow-sm rounded-lg ${
                    error?.toLowerCase().includes("email")
                      ? "border-red-500"
                      : "focus:border-sky-700"
                  }`}
                  id="Email"
                  name="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                {error?.toLowerCase().includes("email") && (
                  <div className="text-red-500 text-sm mt-1">{error}</div>
                )}
              </div>
              <div>
                <label className="font-medium">Password</label>
                <input
                  type="password"
                  required
                  className={`w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-sky-700 shadow-sm rounded-lg`}
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
                {loading ? <BlocksShuffle2 className="w-6 h-6" /> : "Sign Up"}
              </button>
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
