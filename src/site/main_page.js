import './main_page.css';
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import autoSwitchImages from './fuck';


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


        <li><NavLink to="/sign_in_page">Sign In</NavLink>
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
const Recipe = () => {
  return (
    <>
      <div className="slider">
      <autoSwitchImages />
      <div className="slider-item selected"
        style={{ backgroundImage: `url('./images/d7307596991754fa6a6d299e24071e16.jpg')` }}>
      </div>
      <div className="slider-item"
        style={{ backgroundImage: `url('./images/6263136925ab9fe1f3b46814a7610ab1.jpg')` }}>
      </div>
      <div className="slider-item"
        style={{ backgroundImage: `url('./images/f5849cbb3fdd462ec2d075eaf2048683.jpg')` }}>
      </div>
      
      </div>

      <div className="text-container">
        <div className="title-recipe"> 
          Kimchi Fried Rice
        </div>
        <div className="ingredients">
          Easy kimchi fried rice recipe! Kimchi and rice is stir fried with smoky bacon and spicy kimchi juice. 
          It’s simply delicious! Main ingredients:
          <ul>
            <li> Kimchi</li>
            <li> Bacon</li>
            <li> Rice</li>
          </ul>
        </div>
        <div className="small-description">
          Don't miss the opportunity, you must to try this delicious dish! 
        </div>
        <button>More</button>
      </div>
    </>
  );
};



<script src="./fuck.js"></script>

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
      
      <div className="ChangingPicture">
      <div className="title3">Recipe Of The Day</div>
        <div className="containerChanging">
          <Recipe />
        </div>
      </div>
    </div>
  );

}


export default MainPage;

