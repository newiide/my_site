import './main_page.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import SignIn from './sign_in_page';


function Header() {
  return (
    <header>
      <ul class="left-menu">
        <li
          class="home">Home</li>
        <li>Recipes</li>
        <li>Advice</li>
        <li>Contact</li>
      </ul>
      <ul class="right-menu">


        <li><NavLink to="/sign_in_page">SignIn</NavLink>
        </li>

        <li>Log In</li>
      </ul>
    </header>
  );
}

const Title = () => {
  return (
    <div className="title">
      YOLIBEOB
    </div>
  );
}

const Description = () => {
  return (
    <div className="description">
      The taste of home, cook for the soul<br /><br />
      Explore the world of food
    </div>
  );
}

const Inputs = () => {
  return (
    <div className="inputs">
      <input type="email" placeholder="What do you want to cook?" />
      <button>submit</button>
    </div>
  );
}
const Why_us = () => {
  return (
    <>
      <div className="title2">Why Choose Us?</div>
      <div className="grid section-2">
        <div className="grid-item">

          <div className="img" src="./exotic.jpg"> </div>
          <div className="headersmall">Exotic Recipes</div>
          <div className="textsmall">
            pupupp uppupupu. uppupupu, up p puppp upupup upuppupup
            pupupupupup upupupu.
          </div>

        </div>
        <div className="grid-item">

          <div className="img2"> </div>
          <div className="headersmall">Video lessons</div>
          <div className="textsmall">
            pupupp uppupupu. uppupupu, up p puppp upupup upuppupup
            pupupupupup upupupu.
          </div>

        </div>
        <div className="grid-item">

          <div className="img3"> </div>
          <div className="headersmall">Detailed Steps</div>
          <div className="textsmall">
            pupupp uppupupu. uppupupu, up p puppp upupup upuppupup
            pupupupupup upupupu.
          </div>

        </div>

      </div>
    </>
  );
};



const MainPage = () => {
  return (
    <div className="container">
      <div className="main-picture">
        <div className="container_main">
          <Header />
          <div>
            <Title />
            <Description />
            <Inputs />

          </div>
        </div>
      </div>
      <div className="container_why_us">
        <Why_us />
      </div>
    </div>
  );

}


export default MainPage;

