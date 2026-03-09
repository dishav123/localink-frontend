import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/api",
  withCredentials: true
});

// Don't override Content-Type for FormData to preserve multipart boundaries
api.interceptors.request.use((config) => {
  // If the data is FormData, remove Content-Type header to let axios set it automatically
  if (config.data instanceof FormData) {
    delete config.headers['Content-Type'];
  }
  return config;
});

export default api;
