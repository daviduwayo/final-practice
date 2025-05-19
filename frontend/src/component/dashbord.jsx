import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);
const [filteredProducts, setFilteredProducts] = useState([]);
  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/product');
      if (res.data.status === 200) {
        console.log(res.data.product);
        setProducts(res.data.product);
      } else {
        alert('Failed to fetch products');
      }
    } catch (error) {
      console.error(error);
      alert('Failed to fetch products');
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.post(`http://localhost:3000/delete/${id}`);
      alert('Product deleted successfully');
      fetchProducts();
    } catch (error) {
      console.error(error);
      alert('Failed to delete product');
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);


  const reporting = async (e) => {
  const date = e.target.value;
    setFilteredProducts(products.filter((item) => {
  
      const dateString = item?.created_at?.split('T')[0];
    console.log(item?.created_at.split('T'))
      return dateString === date;
    })); 
  }

  return (
    <>
    <input type="date" onChange={reporting} />
    <input type="date" onChange={reporting} />
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>User ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.length > 0 ? (filteredProducts?.map((item) => (
            <tr key={item.pid}>
              <td>{item.pid}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
              <td>{item.userId}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(item.pid)}>Delete</button>
              </td>
            </tr>
          ))):(<><tr><td colSpan="5">No products found for the selected date.</td></tr></>)}
        </tbody>
      </table>

        <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
            <th>User ID</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((item) => (
            <tr key={item.pid}>
              <td>{item.pid}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
              <td>{item.userId}</td>
              <td>
                <button>Edit</button>
                <button onClick={() => handleDelete(item.pid)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Dashboard;