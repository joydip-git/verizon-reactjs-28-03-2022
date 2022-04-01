import axiosInstance from "../axios-config/axiosconfig"

export const fetchProducts = () => {
    return axiosInstance.get()
}

export const fetchProductById = (pid) => {
    return axiosInstance.get(`${pid}`)
}

export const addProduct = (productObj) => {

}

export const updateProduct = (productObj, id) => {

}

export const removeProduct = (id) => {

}