import { Route, Routes } from 'react-router-dom';
import DashBoard from '../../components/core/dashboard/DashBoard';
import Home from '../../components/core/home/Home';
import './App.css';
import ProductList from '../../components/products/product-list/ProductList'
import ViewProduct from '../../components/products/view-product/ViewProduct'
import UpdateProduct from '../../components/products/update-product/UpdateProduct'
import Login from '../../components/core/login/Login'
import AddProduct from '../../components/products/add-product/AddProduct';
import PageNotFound from '../../components/core/page-not-found/PageNotFound'
import RouteGenerator from '../../routes/RouteGenerator';

function App() {
  return (
    <div className="container">
      <DashBoard />
      <RouteGenerator />
    </div>
  );
}

export default App;
/**
 * <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/products' element={<ProductList />} />
        <Route path='/products/:productId' element={<ViewProduct />} />
        <Route path='/products/update/:productId' element={<UpdateProduct />} />
        <Route path='/products/addnew' element={<AddProduct />} />
        <Route path='*' element={<PageNotFound />} />
      </Routes>
 */
