import Home from "../components/core/home/Home";
import Login from "../components/core/login/Login";
import PageNotFound from "../components/core/page-not-found/PageNotFound";
import AddProduct from "../components/products/add-product/AddProduct";
import ProductList from "../components/products/product-list/ProductList";
import UpdateProduct from "../components/products/update-product/UpdateProduct";
import ViewProduct from "../components/products/view-product/ViewProduct";

export const appRoutes = [{
    routeId: 1,
    routePath: '/',
    routeElement: Home
}, {
    routeId: 2,
    routePath: '/home',
    routeElement: Home
}, {
    routeId: 3,
    routePath: '/products',
    routeElement: ProductList,
}, {
    routeId: 4,
    routePath: '/products/:productId',
    routeElement: ViewProduct
}, {
    routeId: 5,
    routePath: '/products/update/:productId',
    routeElement: UpdateProduct
}, {
    routeId: 6,
    routePath: '/products/addnew',
    routeElement: AddProduct
}, {
    routeId: 7,
    routePath: '/login',
    routeElement: Login
}, {
    routeId: 8,
    routePath: '*',
    routeElement: PageNotFound
}]