import axios from "axios";

const env = import.meta.env as ImportMetaEnv & {
  NEXT_PUBLIC_API_URL?: string;
};

const baseURL =
  env.VITE_API_URL || env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

export const apiClient = axios.create({
  baseURL,
  timeout: 15000,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});
