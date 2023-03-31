import { Link, useNavigate } from "react-router-dom";
import apiCall from "./api/api";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/userSlice";
import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";

// Google authentication
import { GoogleLogin } from "@react-oauth/google";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";

const responseMessage = (response) => {
  console.log(response);
};
const errorMessage = (error) => {
  console.log(error);
};

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");

  const [user, setUser] = useState(null);

  const googleData = async () => {
    const googleUser = await apiCall(
      `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
      "get",
      null,
      {
        Authorization: `Bearer ${user.access_token}`,
        Accept: "application/json",
      }
    );
    const userToAuth = await apiCall("/login/google", "post", {
      email: googleUser.email,
      firstname: googleUser.given_name,
      lastname: googleUser.family_name,
      avatar: googleUser.picture,
    });
    if (userToAuth.id) {
      dispatch(
        loginUser({
          id: userToAuth.id,
          firstname: userToAuth.firstname,
          lastname: userToAuth.lastname,
          username: userToAuth.username,
          token: userToAuth.token,
          email: userToAuth.email,
          avatar: userToAuth.avatar,
        })
      );
      navigate("/");
    }
  };

  useEffect(() => {
    if (user) {
      try {
        googleData();
      } catch (error) {
        console.log(error);
      }
    }
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  function notify(message) {
    toast.error(message, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
    });
  }

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await apiCall("/login", "post", {
      email: inputEmail,
      password: inputPassword,
    });
    if (response.id) {
      dispatch(
        loginUser({
          id: response.id,
          firstname: response.firstname,
          lastname: response.lastname,
          username: response.username,
          token: response.token,
          email: response.email,
          avatar: response.avatar,
        })
      );
      navigate("/");
    } else {
      notify("Invalid credentials, try again.");
    }
  };
  return (
    <section className="bg-gray-100">
      <ToastContainer limit={1} />
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen ">
        <Link
          to="/about-us"
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className=" h-24 -mb-[4.5rem] z-10"
            src="https://i.ibb.co/pQFPDr4/no-hunger-update.png"
            alt="logo"
          />
        </Link>
        <div className="sm:w-full bg-white rounded-lg shadow md:mt-0 lg:w-1/4 py-6">
          <div className="p-6 pb-0 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your email..."
                  value={inputEmail}
                  onChange={(event) => setInputEmail(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  value={inputPassword}
                  onChange={(event) => setInputPassword(event.target.value)}
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-start">
                  <div className="flex items-center h-5">
                    <input
                      id="remember"
                      aria-describedby="remember"
                      type="checkbox"
                      className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300"
                      required=""
                    />
                  </div>
                  <div className="ml-3 text-sm">
                    <label
                      htmlFor="remember"
                      className="text-black font-medium"
                    >
                      Remember me
                    </label>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-sm font-medium text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-gray-200	bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign in
              </button>
              <p className="text-sm font-light text-black ">
                Don’t have an account yet?
                <Link
                  to="/register"
                  className="font-medium text-blue-500 hover:underline ml-1"
                >
                  Sign up
                </Link>
              </p>
            </form>
          </div>
          <div className="px-2">
            <div className="flex items-center justify-center mb-4">
              <hr className="w-full border-t-2 border-gray-200" />
              <span className="px-2">or</span>
              <hr className="w-full border-t-2 border-gray-200" />
            </div>
            <button
              onClick={() => login()}
              className="flex w-full p-2 font-medium items-center hover:bg-gray-50 justify-center rounded-lg border"
            >
              <img
                className="w-6 mr-2"
                src="https://www.pngplay.com/wp-content/uploads/13/Google-Logo-PNG-Photo-Image.png"
                alt=""
              />{" "}
              Login with Google
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
