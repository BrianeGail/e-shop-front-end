import './App.css';
import Login from './Login';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Register from './Register';
import Protected from './Protected';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
      
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

    
          <Route
            path="/addProduct"
            element={<Protected Cmp={AddProduct} />}
          />
          <Route
            path="/updateProduct"
            element={<Protected Cmp={UpdateProduct} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
