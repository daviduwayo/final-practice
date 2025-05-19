import { Link, Routes, Route } from "react-router-dom";
import './App.css';
import Login from './component/login';
import View from './component/dashbord';
import Logout from './component/logout';
import AddProduct from './component/addproduct';
import UserProduct from './component/userproduct';

function App() {
  return (
    <>
      <nav>
        <Link to='/login'>Login</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/logout">Logout</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/addproduct">Add Product</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/">View Products</Link>&nbsp;&nbsp;&nbsp;
        <Link to="/userproducts">User Products</Link>
      </nav>
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/' element={<View />} />
        <Route path='/logout' element={<Logout />} />
        <Route path='/addproduct' element={<AddProduct />} />
        <Route path='/userproducts' element={<UserProduct />} />
      </Routes>
    </>
  );
}

export default App;
