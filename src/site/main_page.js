import './main_page.css';
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';



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
      
      <div className="slider-item0 "></div>

      <div className="slider-item1"></div>

      <div className="slider-item2 "></div>
      

      <div className="text-container">
      
                <div class="title-recipe"> 
                    Kimchi Fried Rice
                </div>
                <div class="ingredients">
                Easy kimchi fried rice recipe! Kimchi and rice is stir fried with smoky bacon and spicy kimchi juice. 
                It’s simply delicious! Main ingredients:
                </div>
                <li> Kimchi</li>
                <li> Bacon</li>
                <li> Rice</li>
                <div class="small-description">
                Don't miss the opportunity,
                    you must to try this delicious dish! 
                </div>
                <button>More</button>
            </div>
      

    </>
  )
}


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

