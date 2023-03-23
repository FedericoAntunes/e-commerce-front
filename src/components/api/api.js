import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const apiCall = async (path, method) => {
  const response = await axios({
    method,
    url: path,
  });
  console.log(response.data);
  return response.data;
};

export default apiCall;
