import Axios from "axios";
import { getToken } from "../services/authservice";
//alternatives of axios monent.js, mordernizr, graphql, jquery etc.
const axiosInstance = Axios.create({
    //baseURL: 'http://127.0.0.1:8081/products/',
    baseURL: 'http://localhost:56177/api/',
    timeout: 3000,
    timeoutErrorMessage: 'operation timed out'
})
//axiosInstance.interceptors.request.use()
axiosInstance.interceptors.request.use(
    (config) => {
        config.headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Authorization': `Bearer ${getToken()}`
        }
        return config
    },
    (err) => {
        return Promise.reject(err)
    }
)
export default axiosInstance