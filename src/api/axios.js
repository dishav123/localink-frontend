import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
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
