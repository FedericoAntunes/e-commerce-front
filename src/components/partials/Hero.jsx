import Search from "./Header/Search";

function Hero() {
  return (
    <div
      style={{
        backgroundImage: `url("https://d3i4yxtzktqr9n.cloudfront.net/web-eats-v2/9b21aa66b4922ae2.png")`,
      }}
      className="h-[100vh] px-4 lg:px-24 bg-cover flex justify-start items-center"
    >
      <div
        style={{ flex: "1 1 auto", minWidth: "235px", maxWidth: "700px" }}
        className="pl-0 pr-3 px-3 lg:px-0 mt-2 xs:mt-0 text-left order-5 xs:order-2"
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
          <Search navbarScroll={true} header={false} />
        </div>
      </div>
    </div>
  );
}

export default Hero;
