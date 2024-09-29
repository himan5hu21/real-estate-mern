import axios from "axios";
import { useState } from "react";
import { Form, useNavigate } from "react-router-dom";
import BlocksShuffle2 from "../components/blocks-shuffle-2";

function SignIn() {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const excludeKeywords = ["username", "email"];

  const submitData = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const config = {
        "Content-Type": "application/json",
      };

      const res = await axios({
        method: "POST",
        url: "/api/auth/signin",
        data: JSON.stringify(formData),
        headers: config,
      });

      const data = await res.data;
      if (data.success === false) {
        setLoading(false);
        setError(data.message);
        return;
      }
      setLoading(false);
      console.log(data);
      navigate("/", { replace: true });
    } catch (err) {
      setLoading(false);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError(
          "Failed to sign up due to an internal error. Please try again later."
        );
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.target);
    const formData = Object.fromEntries(data);
    // console.log(formData);
    submitData(formData);
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
            </Form>
            <span className="flex items-center mt-5">
              <span className="h-px flex-1 bg-gray-300"></span>
              <span className="shrink-0 px-6">Or continue with</span>
              <span className="h-px flex-1 bg-gray-300"></span>
            </span>
            <div className="mt-5">
              <button className="w-full flex items-center justify-center gap-x-3 py-2.5 mt-5 border rounded-lg text-sm font-medium hover:bg-gray-50 duration-150 active:bg-gray-100">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 48 48"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_17_40)">
                    <path
                      d="M47.532 24.5528C47.532 22.9214 47.3997 21.2811 47.1175 19.6761H24.48V28.9181H37.4434C36.9055 31.8988 35.177 34.5356 32.6461 36.2111V42.2078H40.3801C44.9217 38.0278 47.532 31.8547 47.532 24.5528Z"
                      fill="#4285F4"
                    />
                    <path
                      d="M24.48 48.0016C30.9529 48.0016 36.4116 45.8764 40.3888 42.2078L32.6549 36.2111C30.5031 37.675 27.7252 38.5039 24.4888 38.5039C18.2275 38.5039 12.9187 34.2798 11.0139 28.6006H3.03296V34.7825C7.10718 42.8868 15.4056 48.0016 24.48 48.0016Z"
                      fill="#34A853"
                    />
                    <path
                      d="M11.0051 28.6006C9.99973 25.6199 9.99973 22.3922 11.0051 19.4115V13.2296H3.03298C-0.371021 20.0112 -0.371021 28.0009 3.03298 34.7825L11.0051 28.6006Z"
                      fill="#FBBC04"
                    />
                    <path
                      d="M24.48 9.49932C27.9016 9.44641 31.2086 10.7339 33.6866 13.0973L40.5387 6.24523C36.2 2.17101 30.4414 -0.068932 24.48 0.00161733C15.4055 0.00161733 7.10718 5.11644 3.03296 13.2296L11.005 19.4115C12.901 13.7235 18.2187 9.49932 24.48 9.49932Z"
                      fill="#EA4335"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_17_40">
                      <rect width="48" height="48" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
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
