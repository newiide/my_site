import React from 'react';
import { NavLink } from 'react-router-dom';
import './404.css';

const NotFound = () => {
  return (
   
    <div className="backnotfound">
      <div className="containernotfound">
      <h1>404 - Not Found</h1>
      <p>Ой!...</p>
      <h2><NavLink to="/main_page">Go To Home</NavLink></h2>
      </div>
      <div className="poorkitty"> </div>
    </div>
    
  );
};

export default NotFound;