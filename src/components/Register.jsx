import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiCall from "./api/api";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/userSlice";
import { ToastContainer, toast } from "react-toastify";

function Register() {
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [username, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [avatar, setAvatar] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createUser = async (e) => {
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
    console.log(response.data);
    if (response.data === "Fill all the fields.") {
      setError("Fill all the fields.");
      return toast.warn("Fill all the fields.", {
        position: "bottom-right",
      });
    }
    if (response.data === "Username already exist.") {
      setError("Username already exist.");
      return toast.warn("Username already exist.", {
        position: "bottom-right",
      });
    }
    if (response.data === "User email already exist.") {
      setError("User email already exist.");
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
      return navigate(`/`);
    }
  };

  return (
    <section className="bg-gradient-to-r from-yellow-300 to-yellow-500 md:h-screen">
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
        <div className="sm:w-full bg-gray-100 rounded-lg shadow-xl md:mt-0 py-6 lg:w-2/4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Create your account
            </h1>
            <form
              onSubmit={createUser}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div className="md:flex">
                <label
                  htmlFor="firstname"
                  className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 mx-4"
                >
                  Firstname:
                </label>
                <input
                  onChange={(e) => setFirstName(e.target.value)}
                  type="text"
                  name="firstname"
                  id="firstname"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your firstname..."
                  required=""
                  value={firstname}
                />
                <label
                  htmlFor="lastname"
                  className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 mx-4"
                >
                  Lastname:
                </label>
                <input
                  onChange={(e) => setLastName(e.target.value)}
                  type="text"
                  name="lastname"
                  id="lastname"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your lastname..."
                  required=""
                  value={lastname}
                />
              </div>
              <div className="md:flex">
                <label
                  htmlFor="username"
                  className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 mx-4"
                >
                  Username:
                </label>
                <input
                  onChange={(e) => setUserName(e.target.value)}
                  type="text"
                  name="username"
                  id="username"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your username..."
                  required=""
                  value={username}
                />
                <label
                  htmlFor="email"
                  className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 mx-4"
                >
                  Email:
                </label>
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  name="email"
                  id="email"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your email..."
                  required=""
                  value={email}
                />
              </div>
              <div className="relative md:flex">
                <label
                  htmlFor="avatar"
                  className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 mx-4"
                >
                  Avatar:
                </label>
                <input
                  className="my-auto block w-full text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none"
                  onChange={(e) => setAvatar(e.target.files[0])}
                  multiple
                  name="avatar"
                  id="avatar"
                  type="file"
                />
                <label
                  htmlFor="password"
                  className="block mb-2 font-medium text-black text-base tracking-wide md:my-auto mt-4 mx-4"
                >
                  Password:
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block lg:w-1/2 p-2.5 "
                  required=""
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="lg:w-2/4 w-full text-base tracking-wide text-white my-4 bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p className="text-base font-light text-black  ">
                Do you already have an account?
                <Link
                  to="/login"
                  className="font-medium text-base text-blue-500 hover:underline ml-1 "
                >
                  Sign in
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
}

export default Register;
