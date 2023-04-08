function RestaurantLoader() {
  return (
    <div
      className="animate-pulse mt-20"
      style={{
        animationDelay: `0.05s`,
        animationDuration: "1s",
      }}
    >
      <div className="w-full h-32 bg-gray-200"></div>
      <div className="mx-2 lg:mx-24">
        <div className="mx-2">
          <h2 className="text-left font-bold bg-gray-200 h-12 rounded-lg text-4xl mb-6 mt-12"></h2>
          <small className="text-left h-[80px] w-[200px] bg-gray-200 rounded-lg block">
            {/*      <div className="mb-2">
              <FontAwesomeIcon className="text-yellow-300" icon={faStar} /> 4.2
              <span className="text-gray-500"> (100+ reviews) • </span>
              <span className="underline text-blue-600">More information</span>
            </div>
            <div className="text-gray-400 mb-2">$ • Burguer • Fastfood •</div>
            <div className="font-semibold text-orange-400">
              {!user
                ? "Login to see the estimated delivery time"
                : "The estimated waiting time is 30 - 40 min"}
            </div> */}
          </small>
        </div>
        <div className="mt-16">
          <h2 className="text-left font-bold bg-gray-200 h-10 rounded-lg text-4xl mb-6 mt-12"></h2>
          <div className="grid-cols-1 sm:grid-cols-4 mt-6 grid gap-2">
            {[...Array(8).keys()].map((product, index) => {
              return (
                <div
                  key={index}
                  className="pb-6 overflow-hidden rounded-lg relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
                >
                  <div className="-mb-6 relative">
                    <div className="rounded-full absolute z-10 left-4 top-2 w-12 h-12" />
                  </div>
                  <div className="md:hover:scale-105 ease-in-out relative w-full h-[200px] bg-gray-200 mb-5 overflow-hidden duration-300">
                    <div className="pt-6 pb-4 z-0 mx-auto rounded-t-lg" />
                  </div>
                  <div className="px-5 h-12">
                    <h5 className="text-md text-start font-semibold tracking-tight text-gray-900 dark:text-white">
                      {" "}
                    </h5>
                    <div className="flex items-end">
                      <span className="font-bold text-xl w-12 text-green-500">
                        {" "}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default RestaurantLoader;
