import axios from "axios";
import { useEffect, useState } from 'react';

const UserProduct = () => {
  const [userProducts, setUserProducts] = useState([]);
  const [sumPrice, setSumPrice] = useState(0);

  const fetchUserProducts = async () => {
    try {
      const res = await axios.get('http://localhost:3000/productid');
      setUserProducts(res.data.product);
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching user products');
    }
  };

  const fetchSumPrice = async () => {
    try {
      const res = await axios.get('http://localhost:3000/sumPrice');
      setSumPrice(res.data.totalPrice);
    } catch (error) {
      console.error(error);
      alert('An error occurred while fetching the sum of prices');
    }
  };

  useEffect(() => {
    fetchUserProducts();
    fetchSumPrice();
  }, []);

  return (
    <>
      <table border={1}>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Username</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Product Price</th>
          </tr>
        </thead>
        <tbody>
          {userProducts.map((item) => (
            <tr key={`${item.id}-${item.pid}`}>
              <td>{item.id}</td>
              <td>{item.username}</td>
              <td>{item.pid}</td>
              <td>{item.productName}</td>
              <td>{item.productPrice}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button onClick={fetchSumPrice}>
          Calculate Total Price
        </button>
        {sumPrice > 0 && <p>Total Price: {sumPrice}</p>}
      </div>
    </>
  );
};

export default UserProduct;