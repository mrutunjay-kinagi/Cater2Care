import React from 'react';
import { useHistory } from 'react-router-dom';
import './style/Home.css'; 

const Home = () => {
  const history = useHistory();

  const handleDonorClick = () => {
    history.push('/login');
  };

  return (
    <div className="login-container">
      <h1>Hello !! Welcome to Cater2Care</h1>
      <button className="donor-button" onClick={handleDonorClick}>
        Are you a Donor?
      </button>
    </div>
  );
}

export default Home;
