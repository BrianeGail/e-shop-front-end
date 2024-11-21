import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Protected = ({ Cmp }) => {
  const navigate = useNavigate();


  useEffect(() => {
    if (!localStorage.getItem('user-info')) {
      navigate('/register'); 
    }
  }, [navigate]);


  return <Cmp />;
};

export default Protected;
