import axios from "axios";
axios.defaults.baseURL = process.env.REACT_APP_SERVER_DOMAIN;

const apiCall = async (url, method, data, headers) => {
  const response = await axios({
    method,
    url,
    data,
    headers,
  });
  return response.data;
};

export default apiCall;
