import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const userInfo = localStorage.getItem('user-info');
  const username = userInfo ? JSON.parse(userInfo) : null;

  const navigate = useNavigate();

  function logOut() {
    localStorage.clear(); 
    navigate('/register'); 
  }

  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">E-COM (CRUD)</Navbar.Brand>
          <Nav className="mr-auto navbar_wrapper">
            {userInfo ? (
              <>
                <Link to="/addProduct">Add Product</Link>
                <Link to="/updateProduct">Update Product</Link>
              </>
            ) : (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            )}
            {userInfo && (
              <NavDropdown title={username?.name || "User"}>
                <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                <NavDropdown.Item onClick={() => navigate("/profile")}>Profile</NavDropdown.Item> {/* Profile link */}
              </NavDropdown>
            )}

          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
