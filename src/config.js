import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        "https://fashion-fusion-backend.onrender.com",
});

export const scrollToTop = () => {
    window.scrollTo(0, 0)
}