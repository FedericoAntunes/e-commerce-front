import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import apiCall from "./api/api";
import { useDispatch } from "react-redux";
import { loginUser } from "../redux/slice/userSlice";

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
    /*     const response = await axios({
      method: "POST",
      url: `${process.env.REACT_APP_API_URL}/usuarios/users`,
      data: formData,
      headers: { "Content-Type": "multipart/form-data" },
    }); */
    console.log(response);
    if (response === "Fill all the fields.") {
      setError("Fill all the fields.");
    } else if (response === "User already exist.") {
      setError("User already exist.");
    } else {
      const response = await apiCall("/login", "post", {
        email,
        password,
      });
      /*       const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/usuarios/tokens`,
        {
          email,
          password,
        }
      ); */
      console.log(response);
      const user = response;
      dispatch(loginUser(user));
      navigate(`/`);
    }
  };

  return (
    <section className="bg-gray-100">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen ">
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
        <div className="sm:w-full bg-white rounded-lg shadow md:mt-0 py-6 lg:w-1/4">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-black md:text-2xl">
              Create your account
            </h1>
            <form
              onSubmit={createUser}
              className="space-y-4 md:space-y-6"
              action="#"
            >
              <div>
                <label
                  htmlFor="firstname"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Firstname
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
              </div>
              <div>
                <label
                  htmlFor="lastname"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Lastname
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
              <div>
                <label
                  htmlFor="username"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Username
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
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Email
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
              <div className="">
                <input
                  onChange={(e) => setAvatar(e.target.files[0])}
                  multiple
                  name="avatar"
                  id="avatar"
                  type="file"
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-black "
                >
                  Password
                </label>
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  className="bg-gray-50 border border-gray-300 text-black sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                  value={password}
                />
              </div>
              <button
                type="submit"
                className="w-full text-white 	bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p className="text-sm font-light text-black  ">
                Do you already have an account?
                <Link
                  to="/login"
                  className="font-medium text-blue-500 hover:underline ml-1"
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
