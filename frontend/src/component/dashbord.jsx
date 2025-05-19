import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/product');
      if (res.data.status === 200) {
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

  return (
    <>
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