import axios from "axios";

const secureAxios = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
  
});

secureAxios.interceptors.request.use((config) => {
  config.headers["Authourization"] = "Token";
  
  return config;
});

secureAxios.interceptors.response.use(
  (response) => {
    console.log("Server Call was success");
  
    return response;
  },
  (error) => {
    console.log("Encountered an Error");
    return error;
  }
);

export default secureAxios;
