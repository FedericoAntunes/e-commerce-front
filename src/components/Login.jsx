import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Actions
import { loginUser } from "../redux/slice/userSlice";

// Google authentication
import { useGoogleLogin } from "@react-oauth/google";

// ApiCall
import apiCall from "./api/api";

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

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const dispatch = useDispatch();

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
      email: googleUser.data.email,
      firstname: googleUser.data.given_name,
      lastname: googleUser.data.family_name,
      avatar: googleUser.data.picture,
    });
    if (userToAuth.data.id) {
      dispatch(
        loginUser({
          id: userToAuth.data.id,
          firstname: userToAuth.data.firstname,
          lastname: userToAuth.data.lastname,
          username: userToAuth.data.username,
          token: userToAuth.data.token,
          email: userToAuth.data.email,
          avatar: userToAuth.data.avatar,
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await apiCall("/login", "post", {
      email: inputEmail,
      password: inputPassword,
    });
    console.log(response);
    if (response.data.id) {
      dispatch(
        loginUser({
          id: response.data.id,
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          username: response.data.username,
          token: response.data.token,
          email: response.data.email,
          avatar: response.data.avatar,
        })
      );
      navigate("/");
    } else {
      notify("Invalid credentials, try again.");
    }
  };

  return (
    <section className="bg-gradient-to-r from-yellow-300 to-yellow-500 md:min-h-screen">
      <ToastContainer limit={1} />
      <div className=" flex flex-col items-center justify-center px-6 py-8 mx-auto">
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
        <div className="sm:w-full bg-gray-100 shadow-xl rounded-lg md:mt-0 lg:w-1/4 py-6">
          <div className="p-6 pb-0 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign in to your account
            </h1>
            <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-lg font-medium text-black tracking-wide"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-2 focus:ring-blue-600 focus:border-blue-600 block w-full p-2.5"
                  placeholder="Insert your email..."
                  value={inputEmail}
                  onChange={(event) => setInputEmail(event.target.value)}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-lg font-medium text-black tracking-wide"
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
                  <div className="sm:mx-3 ml-3 text-base font-medium text-black">
                    <label
                      htmlFor="remember"
                      className="text-black font-medium"
                    >
                      Remember
                    </label>
                  </div>
                </div>
                <Link
                  to="#"
                  className="text-base font-medium text-blue-500 hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-gray-200	bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center  "
              >
                <p className="mx-auto text-md">Sign in</p>
              </button>
              <p className="text-base font-light text-black  ">
                Don’t have an account yet?
                <Link
                  to="/register"
                  className="text-base font-light  text-blue-500 hover:underline ml-1"
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
