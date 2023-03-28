import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const apiCall = async (path, method, userData) => {
  const response = await axios({
    method,
    url: path,
    data: userData,
  });
  return response.data;
};

export default apiCall;
