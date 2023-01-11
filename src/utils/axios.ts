import axios from "axios";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_URL,
  headers: {
    "Content-type": "application/json",
  },
});
