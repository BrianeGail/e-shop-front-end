import Header from './Header';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('user-info')) {
      navigate("/addProduct");
    }
  }, [navigate]);

  // Marking the login function as async
  const login = async () => {
    console.log(email, password);
    const item = { email, password };

    try {

      const result = await fetch("http://localhost:8000/api/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(item),
      });

     
      const data = await result.json();
      console.log(data);


      if (data.success) {
        localStorage.setItem('user-info', JSON.stringify(data.user));
        navigate("/addProduct");
      } else {
 
        alert('Login failed');
        console.log(data);
      }
    } catch (error) {
      console.error('Error during login:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <Header />
      <h2>Login</h2>
      <div className="col-sm-6 offset-sm-3">
        <input
          type="text"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
          className="form-control"
        />
        <br />
        <input
          type="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
          className="form-control"
        />
        <br />
        <button onClick={login} className="btn btn-primary">Login</button>
      </div>
    </div>
  );
};

export default Login;
