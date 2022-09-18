import axios from "axios";

const clienteMicroservice = axios.create({
  baseURL: "http://localhost:3010",
});

clienteMicroservice.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("@token");

  if (token) {
    const headers = { Authorization: `Bearer ${token}`, ...config.headers };
    config.headers = headers;
  }

  return config;
});

export default clienteMicroservice;
