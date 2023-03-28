import Search from "./Header/Search";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/9b21aa66b4922ae2.png")`,
      }}
      className="h-[100vh] pl-4 bg-cover flex justify-start items-center"
    >
      <form
        style={{ flex: "1 1 auto", minWidth: "235px", maxWidth: "700px" }}
        className="px-0 xs:px-3 mt-2 xs:mt-0 text-left order-5 xs:order-2"
      >
        <label
          htmlFor="default-search"
          className="mb-20 font-bold text-5xl text-gray-900 dark:text-white"
        >
          Order food to your door
        </label>
        <div className="relative mt-6 w-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <img src="/img/no-hunger.png" width="25" height="25" alt="logo" />
          </div>
          <Search navbarScroll={true} />
          {/* <input
            type="search"
            id="default-search"
            className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search Restaurant, Category, Food..."
          /> */}
          {/* <button
            type="submit"
            className="text-white absolute h-[3.3rem] -right-28 bottom-0 bg-black hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-bold rounded-lg text-sm px-4 dark:bg-yellow-600 dark:hover:bg-yellow-700 dark:focus:ring-yellow-800"
          >
            Find Food
          </button> */}
        </div>
      </form>
    </div>
  );
}

export default Hero;
