import Axios from "axios";
//alternatives of axios monent.js, mordernizr, graphql, jquery etc.
const axiosInstance = Axios.create({
    baseURL: 'http://127.0.0.1:8081/products/',
    timeoutErrorMessage: 'operation timed out'
})

export default axiosInstance