function CompaniesLoader() {
  return (
    <div
      className="grid-cols-1 animate-pulse sm:grid-cols-2 mx-4 grid gap-x-8 gap-y-12 pt-16 mt-16"
      style={{
        animationDelay: `0.05s`,
        animationDuration: "1s",
      }}
    >
      {[...Array(8).keys()].map((company, index) => (
        <div
          key={index}
          className="mx-2 rounded-lg overflow-hidden border shadow-lg"
        >
          <div className="h-28 relative bg-gray-200"></div>
          <div className="text-left h-20 bg-white relative p-4"></div>
        </div>
      ))}
    </div>
  );
}

export default CompaniesLoader;
