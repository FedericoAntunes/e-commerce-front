import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserShield } from "@fortawesome/free-solid-svg-icons";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";

// Actions
import { loginUser } from "../redux/slice/userSlice";

// Components
import ScrollToTop from "./ScrollToTop";

// Google authentication
import { useGoogleLogin } from "@react-oauth/google";

// ApiCall
import apiCall from "./api/api";
import SpinnerLoader from "./partials/loaders/SpinnerLoader";

function notify(message) {
  toast.error(message, {
    position: "bottom-right",
    autoClose: 3000,
    hideProgressBar: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
  });
}

function Login() {
  const [inputEmail, setInputEmail] = useState("");
  const [inputPassword, setInputPassword] = useState("");
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(false);

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
    // eslint-disable-next-line
  }, [user]);

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  const handleSubmit = async (event) => {
    setLoader(true);
    event.preventDefault();

    const response = await apiCall("/login", "post", {
      email: inputEmail,
      password: inputPassword,
    });
    if (response.data && response.data.id) {
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
    setLoader(false);
  };

  const handleFillInputs = () => {
    setInputEmail("user@hotmail.com");
    setInputPassword("123");
  };

  return (
    <section className="bg-[url('https://images-ext-2.discordapp.net/external/B-Q5yWCKhF1nxZrMrnfRo3NIfNEwWDplURKiwmDcx2E/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1/https/images.pexels.com/photos/616401/pexels-photo-616401.jpeg')] bg-cover bg-no-repeat w-full md:min-h-screen">
      <ScrollToTop />
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
        <div className="w-full sm:w-[600px] bg-transparent backdrop-blur border border-gray backdrop-grayscale-[0.5]  shadow-xl rounded-lg md:mt-0 py-6">
          <div className="p-6 pb-0 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Sign in to your account
            </h1>
            <div className="flex justify-end text-sm font-medium">
              <Link
                to="https://e-commerce-admin-mu.vercel.app/login"
                className="text-blue-600 md:hover:text-blue-700 focus:text-blue-700 md:hover:underline transform md:hover:scale-110 focus:scale-110 transition-all"
              >
                <FontAwesomeIcon
                  icon={faUserShield}
                  className="text-blue-500 mr-2"
                />
                Admin Panel
              </Link>
            </div>
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
                <div className="flex justify-center text-sm font-medium">
                  <button
                    className="m-2 md:px-4 md:py-2 rounded-md text-white bg-blue-500 md:hover:bg-blue-600 focus:bg-blue-600 transition-colors"
                    type="button"
                    onClick={handleFillInputs}
                  >
                    <FontAwesomeIcon icon={faPencilAlt} className="mr-2" />
                    Fill Inputs
                  </button>
                </div>
                <Link
                  to="#"
                  className="text-base font-medium text-blue-500 md:hover:underline"
                >
                  Forgot password?
                </Link>
              </div>
              <button
                type="submit"
                className="w-full text-gray-200	bg-yellow-500 md:hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-base px-5 py-2.5 text-center  "
              >
                <p className="mx-auto inline-block text-md">
                  {loader ? <SpinnerLoader /> : "Sign in"}
                </p>
              </button>
              <p className="text-base font-light text-black  ">
                Don’t have an account yet?
                <Link
                  to="/register"
                  className="text-base font-light  text-blue-500 md:hover:underline ml-1"
                >
                  Sign up
                </Link>
              </p>
            </form>
            <div className="flex items-center justify-center mb-4">
              <hr className="w-full border-t-2 border-gray-200" />
              <span className="px-2">or</span>
              <hr className="w-full border-t-2 border-gray-200" />
            </div>
            <button
              onClick={() => login()}
              className="flex w-full p-2 font-medium items-center md:hover:bg-gray-50 bg-white justify-center rounded-lg border"
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
