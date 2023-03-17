import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        "https://fashion-fusion-backend.onrender.com",
});
