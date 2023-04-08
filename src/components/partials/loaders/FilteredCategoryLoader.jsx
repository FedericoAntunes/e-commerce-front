function FilteredCategoryLoader() {
  return (
    <div className="mt-20 animate-pulse pt-6">
      <h3
        className="text-2xl bg-gray-200 w-[300px] rounded-lg mx-auto h-8 font-semibold"
        style={{
          animationDelay: `0.05s`,
          animationDuration: "1s",
        }}
      >
        {" "}
      </h3>
      <div className="pt-6 grid-cols-1 sm:grid-cols-4 sm:mx-24 grid gap-2">
        {[...Array(8)].map((product, index) => {
          return (
            <div
              key={index}
              className="pb-6 my-6 relative w-70 max-w-sm bg-white border m-2 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
            >
              <div className="-mb-6 relative">
                <div className="rounded-full bg-white absolute z-10 left-4 top-2 w-12 h-12" />
              </div>
              <div className="w-full h-[180px] bg-gray-200 rounded-t-lg"></div>
              <div className="px-5 h-[80px]">
                <h5 className="text-md text-start font-semibold tracking-tight truncate bg-gray-200 dark:text-white">
                  {" "}
                </h5>
                <div className="flex items-end">
                  <span className="font-bold w-[100px] bg-gray-200 text-xl text-green-500">
                    {" "}
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilteredCategoryLoader;
