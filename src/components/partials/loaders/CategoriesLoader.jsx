function CategoriesLoader() {
  return (
    <div
      className="pt-2 animate-pulse mt-16 px-4 w-full h-[80px] mx-auto"
      style={{
        animationDelay: `0.05s`,
        animationDuration: "1s",
      }}
    >
      <h4 className="text-left bg-gray-200 rounded-lg mb-12 pt-6 text-3xl font-semibold">
        {" "}
      </h4>
      <div className="overflow-hidden h-16 pb-6">
        {[...Array(12).keys()].map((category, index) => {
          return (
            <div
              key={index}
              className="rounded-lg inline-block mx-2 w-[200px] bg-gray-200 h-16"
            >
              {" "}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriesLoader;
