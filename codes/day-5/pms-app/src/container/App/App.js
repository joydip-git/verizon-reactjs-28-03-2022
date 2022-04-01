import DashBoard from '../../components/core/dashboard/DashBoard';
import './App.css';
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
