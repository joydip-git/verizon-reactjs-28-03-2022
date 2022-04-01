import axiosInstance from "../axios-config/axiosconfig"

export const authenticate = (userObj) => {
    return axiosInstance.post('/login', userObj)
}
export const saveToken = (token) => {
    sessionStorage.setItem('token', token)
}

export const getToken = () => {
    return sessionStorage.getItem('token')
}

export const isLoggedIn = () => {
    return sessionStorage.getItem('token') !== undefined ? true : false;
}

export const removeToken = () => {
    sessionStorage.removeItem('token')
}