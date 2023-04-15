import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

// Actions
import { loginUser } from "../redux/slice/userSlice";

// Components

// ApiCall
import apiCall from "./api/api";
import SpinnerLoader from "./partials/loaders/SpinnerLoader";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [loader, setLoader] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUser = async (e) => {
    setLoader(true);
    e.preventDefault();
    const formData = new FormData();
    formData.append("firstname", firstname);
    formData.append("lastname", lastname);
    formData.append("avatar", avatar);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("password", password);
    const response = await apiCall("/users", "post", formData, {
      "Content-Type": "multipart/form-data",
    });
    if (response.data === "Fill all the fields.") {
      setLoader(false);
      return toast.warn("Fill all the fields.", {
        position: "bottom-right",
      });
    }
    if (response.data === "Username already exist.") {
      setLoader(false);
      return toast.warn("Username already exist.", {
        position: "bottom-right",
      });
    }
    if (response.data === "User email already exist.") {
      setLoader(false);
      return toast.warn("User email already exist.", {
        position: "bottom-right",
      });
    }
    if (response.data === "User stored") {
      const response = await apiCall("/login", "post", {
        email,
        password,
        reg_mode: "email",
      });
      const user = response.data;
      dispatch(loginUser(user));
      setLoader(false);
      return navigate(`/`);
    }
  };

  return (
    <section className="bg-[url('https://images-ext-2.discordapp.net/external/B-Q5yWCKhF1nxZrMrnfRo3NIfNEwWDplURKiwmDcx2E/%3Fauto%3Dcompress%26cs%3Dtinysrgb%26w%3D1260%26h%3D750%26dpr%3D1/https/images.pexels.com/photos/616401/pexels-photo-616401.jpeg')] bg-cover bg-no-repeat w-full md:min-h-screen">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto ">
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
        <div className="w-full sm:w-[700px] bg-transparent backdrop-blur border border-gray backdrop-grayscale-[0.5]  shadow-xl rounded-lg md:mt-0 py-6">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h2 className="text-xl font-bold leading-tight tracking-tight mt-4 text-black md:text-2xl">
              Create your account
            </h2>
            <form
              onSubmit={createUser}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="md:grid grid-cols-2 gap-4 ">
                <div>
                  <label
                    htmlFor="firstname"
                    className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 w-fit"
                  >
                    Firstname:
                  </label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    type="text"
                    name="firstname"
                    id="firstname"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="Insert your firstname..."
                    required=""
                    value={firstname}
                  />
                </div>{" "}
                <div>
                  <label
                    htmlFor="lastname"
                    className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 w-fit"
                  >
                    Lastname:
                  </label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    type="text"
                    name="lastname"
                    id="lastname"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="Insert your lastname..."
                    required=""
                    value={lastname}
                  />
                </div>
                <div>
                  <label
                    htmlFor="username"
                    className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 w-fit"
                  >
                    Username:
                  </label>
                  <input
                    onChange={(e) => setUserName(e.target.value)}
                    type="text"
                    name="username"
                    id="username"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="Insert your username..."
                    required=""
                    value={username}
                  />
                </div>{" "}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 w-fit"
                  >
                    Email:
                  </label>
                  <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 block w-full p-2.5"
                    placeholder="Insert your email..."
                    required=""
                    value={email}
                  />
                </div>
                <div>
                  <label
                    htmlFor="avatar"
                    className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 w-fit"
                  >
                    Avatar:
                  </label>
                  <input
                    className="my-auto block w-full text-xs text-gray-900 border border-gray-300 rounded-lg focus:ring-green-500 focus:border-green-500 cursor-pointer bg-gray-50"
                    onChange={(e) => setAvatar(e.target.files[0])}
                    name="avatar"
                    id="avatar"
                    type="file"
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 w-fit"
                  >
                    Password:
                  </label>
                  <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    className="w-full bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-green-500 focus:border-green-500 focus:ring-primary-600 focus:border-primary-600 block p-2.5 "
                    required=""
                    value={password}
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <button className="lg:w-2/4 w-full text-base text-center tracking-wide ease-in-out duration-300 text-white my-4 bg-yellow-500 lg:hover:bg-yellow-400 active:bg-yellow-600 font-medium rounded-lg px-5 py-2.5">
                  <p className="mx-auto font-sm ">
                    {loader ? <SpinnerLoader /> : "Sign up"}
                  </p>
                </button>
              </div>
              <p className="text-base font-light text-black  ">
                Do you already have an account?
                <Link
                  to="/login"
                  className="font-medium text-base text-green-600 lg:hover:underline ml-1 "
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Register;
