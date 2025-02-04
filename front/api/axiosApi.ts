import axios from "axios";

const axiosApi = axios.create({
  baseURL: process.env.EXPO_PUBLIC_API_URL || "http://localhost:3000",
});

axiosApi.interceptors.request.use((config) => {
  config.headers["x-token"] = "";
  return config;
});

export default axiosApi;