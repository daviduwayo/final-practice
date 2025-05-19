import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Logout = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await axios.get('http://localhost:3000/logout');
      localStorage.removeItem('user');
     window.location.href="/login"
    } catch (error) {
      console.error(error);
      alert('Logout failed');
    }
  };

  useEffect(() => {
    handleLogout();
  }, []);

  return <h1>Logging out...</h1>;
};

export default Logout;