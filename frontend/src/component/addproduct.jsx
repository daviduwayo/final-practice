import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [productData, setProductData] = useState({ productName: "", productPrice: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setProductData({ ...productData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/addProduct', productData);
      if (res.data.status === 200) {
        alert('Product added successfully');
        setProductData({ productName: "", productPrice: "" });
        navigate('/');
      } else {
        alert(res.data.message || 'Failed to add product');
      }
    } catch (error) {
      if (error.response && error.response.status === 401) {
        alert('You are not authorized. Please log in first.');
      } else {
        console.error(error);
        alert('An error occurred');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="productName"
          value={productData.productName}
          onChange={handleChange}
          placeholder="Product Name"
        />
        <input
          type="text"
          name="productPrice"
          value={productData.productPrice}
          onChange={handleChange}
          placeholder="Product Price"
        />
        <button type="submit">Add Product</button>
      </form>
    </>
  );
};

export default AddProduct;