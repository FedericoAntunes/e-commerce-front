import { Link } from "react-router-dom";
function Register() {
  return (
    <section class="bg-gray-50 bg-gray-900">
      <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen ">
        <Link
          to="/about-us"
          class="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            class=" h-24 -mb-[4.5rem] z-10"
            src="https://i.ibb.co/pQFPDr4/no-hunger-update.png"
            alt="logo"
          />
        </Link>
        <div class="w-full bg-gray-600 rounded-lg shadow md:mt-0 sm:max-w-md py-6">
          <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-200 md:text-2xl">
              Create your account
            </h1>
            <form class="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  for="username"
                  class="block mb-2 text-sm font-medium text-gray-200"
                >
                  Your username?
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="bg-gray-50 border border-gray-300 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your username..."
                  required=""
                />
              </div>
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-200"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  class="bg-gray-50 border border-gray-300 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                  placeholder="Insert your email..."
                  required=""
                />
              </div>
              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-200"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="••••••••"
                  class="bg-gray-50 border border-gray-300 text-gray-200 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                  required=""
                />
              </div>
              <button
                type="submit"
                class="w-full text-gray-200	bg-yellow-500 hover:bg-yellow-400 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Sign up
              </button>
              <p class="text-sm font-light text-gray-200 font-medium">
                Do you already have an account?
                <Link
                  to="/login"
                  class="font-medium text-blue-500 hover:underline ml-1"
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
