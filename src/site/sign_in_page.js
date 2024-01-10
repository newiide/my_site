import './sign_in_page.css';

import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import scrollToBottom from './main_page_components';

function Header() {
  return (
    <header>
      <ul class="left-menu">
        <li
          class="home"><NavLink to="/main_page">Home</NavLink></li>
        <li>Recipes</li>
        <li> <NavLink to="/advices">Advices</NavLink></li>
        <li className="Contact" onClick={scrollToBottom}>Contact</li>
      </ul>
      <ul class="right-menu">


        <li><NavLink to="/sign_in_page">Sign In</NavLink>
        </li>

        <li>Log In</li>
      </ul>
    </header>
  );
}



const SignIn = () => {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); 

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('user', JSON.stringify(formData));
    setFormData({ email: '', password: '' });
    setSuccessMessage('Registration successful!');
    setTimeout(() => {
      navigate('/'); 
    }, 3000);
  };

  return (
    <div className="sign-in">
    <h2>Sign In</h2>
    {successMessage && <p>{successMessage}</p>}
    <form onSubmit={handleFormSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label htmlFor="age">Age:</label>
        <input
          type="number"
          id="age"
          name="age"
          value={formData.age}
          onChange={handleInputChange}
        />
      </div>
      <button type="submit">Register</button>
    </form>
  </div>
);
};
const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="contact-info">
          <h3>Contact Us</h3>
          <p>123 Street Name, City, Country</p>
          <p>Phone: +1234567890</p>
          <p>Email: info@example.com</p>
        </div>
        <div className="social-links">
          <h3>Follow Us</h3>
          <ul>
            <p><a href="https://facebook.com">Facebook</a></p>
            <p><a href="https://twitter.com">Twitter</a></p>
            <p><a href="https://instagram.com">Instagram</a></p>
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 YOLIBEOB. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

const SignInPage = () => {
  return (
    <>
    <div className="main-picture1">
    <div className="container_main">
    <div className="Header-background">
      <Header />
      <SignIn />
    </div>
    </div>
    
    </div>
    <Footer />
    </>
  );
};


export default SignInPage;