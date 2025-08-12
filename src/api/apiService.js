import axios from "axios";

const API_BASE_URL = "https://eventify-api.up.railway.app/";

export const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 5000,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add request interceptor for auth tokens if needed
// api.interceptors.request.use((config) => {
//   const token = localStorage.getItem("token");
//   if (token) {
//     config.headers.Authorization = `Bearer ${token}`;
//   }
//   return config;
// });

// // Centralized error handling
// const handleError = (error) => {
//   const message = error.response?.data?.message || error.message;
//   console.error("API Error:", message);
//   throw new Error(message);
// };

// export { handleError };
