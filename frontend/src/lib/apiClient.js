// frontend/lib/apiClient.js
import axios from "axios";

const isServer = typeof window === "undefined";

const API_BASE_URL = isServer
  ? process.env.INTERNAL_API_BASE_URL || "http://backend:8000/api"
  : process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:8000/api";

export default API_BASE_URL;
