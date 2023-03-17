import axios from "axios";

export const axiosInstance = axios.create({
    baseURL:
        "http://localhost:8080",
});

export const scrollToTop = () => {
    window.scrollTo(0, 0)
}