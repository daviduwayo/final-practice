import { useState } from "react";
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [userData, setUserData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/login', userData);
      if (res.data.status === 200) {

        localStorage.setItem('user', JSON.stringify(res.data.data));
        window.location.href="/"
      } else {
        alert('Invalid username or password');
      }
    } catch (error) {
      console.error(error);
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <form onSubmit={handleLogin}>
        <label>Email</label><br />
        <input type="text" name="email" value={userData.email} onChange={handleChange} /><br /><br />
        <label>Password</label><br />
        <input type="password" name="password" value={userData.password} onChange={handleChange} /><br /><br />
        <button type="submit">Login</button>
        <button type="reset" onClick={() => setUserData({ email: "", password: "" })}>Cancel</button>
      </form>
    </>
  );
};

export default Login;