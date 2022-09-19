import axios from "axios";

const usuarioMicroservice = axios.create({
  baseURL: "http://localhost:3001",
});

usuarioMicroservice.interceptors.request.use(async (config) => {
  const token = localStorage.getItem("@token");

  if (token) {
    const headers = { Authorization: `Bearer ${token}`, ...config.headers };
    config.headers = headers;
  }

  return config;
});

export default usuarioMicroservice;
