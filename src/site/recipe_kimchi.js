import './recipe_kimchi.css';
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import { scrollToBottom, ScrollToTopButton } from './main_page_components';


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

  const Slider_kimchi = () => {
    const slide1 = useRef();
    const slide2 = useRef();
    const slidesRefs = [slide1, slide2];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        const selectedIndex = slidesRefs.findIndex(
          (ref) => ref.current && ref.current.classList.contains('selected')
        );
        const nextIndex = (selectedIndex + 1) % slidesRefs.length;
  
        slidesRefs.forEach((ref) => {
          if (ref.current) {
            ref.current.classList.remove('selected');
          }
        });
  
        if (slidesRefs[nextIndex].current) {
          slidesRefs[nextIndex].current.classList.add('selected');
        }
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);
  
    return (
      <div className="slider-kimchi">
        <div
          className="slider-item-kimchi selected"
          ref={slide1}
          style={{
            zIndex: 3,
            backgroundImage: `url('./images/1.jpg')`,
          }}
        ></div>
        <div
          className="slider-item-kimchi"
          ref={slide2}
          style={{
            zIndex: 2,
            backgroundImage: `url('./images/2.jpg')`,
          }}
        ></div>
      </div>
    );
  };

const Kimchi = () => {
    return(
        <div className="container">
      <div className="back_kimchi">
        <div className="container-main">
            <Header />
            <div className="Kimchi_title" >
              KIMCHI FRIED RICE RECIPE
            </div>
            <Slider_kimchi />
            </div>

            </div>
            <ScrollToTopButton /> 
            </div>
    );
}

export default Kimchi;