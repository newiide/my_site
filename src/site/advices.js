import React from 'react';
import './advices.css';
import { scrollToBottom, ScrollToTopButton } from './main_page_components';
import { NavLink } from 'react-router-dom';

const Header = () => {
  
    return (
      <header>
        <ul class="left-menu">
        <li
          class="home"><NavLink to="/main_page">Home</NavLink></li>
          <li>Recipes</li>
          <li><NavLink to="/advices">Advices</NavLink></li>
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

const AdvicesPage = () => {
  return (
    <div className="backgroundadvice">
    <div className="container_main">
    <div className="Header-background">
    <Header />
    <scrollToBottom />
    <ScrollToTopButton /> 
    </div></div></div>
  );
        }

export default AdvicesPage;