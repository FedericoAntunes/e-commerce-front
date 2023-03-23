import apiCall from "./api/api";
function Home() {
  const companies = async () => {
    const response = await apiCall("/companies", "get");
    return response;
  };
  return <h2 className="text-red-500">Hello</h2>;
}

export default Home;
