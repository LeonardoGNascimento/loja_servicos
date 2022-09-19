import axios from "axios";

const menuMicroservice = axios.create({
  baseURL: "http://localhost:3011",
});

menuMicroservice.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("@token");

  if (token) {
    const headers = { Authorization: `Bearer ${token}`, ...config.headers };
    config.headers = headers;
  }

  return config;
});

export default menuMicroservice;
