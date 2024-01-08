import './main_page.css';
import React, { useState, useRef, useEffect } from "react";
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



  
  const Slider = () => {
    const slide1 = useRef();
    const slide2 = useRef();
    const slide3 = useRef();
    const slidesRefs = [slide1, slide2, slide3];
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        
        const selectedIndex = slidesRefs.findIndex(ref => ref.current.classList.contains('selected'));
        const nextIndex = (selectedIndex + 1) % slidesRefs.length;
  
        
        slidesRefs[selectedIndex].current.classList.remove('selected');
        slidesRefs[nextIndex].current.classList.add('selected');
      }, 2000);
  
      return () => clearInterval(intervalId);
    }, []);

  return (
    <>
      <div className="slider">
      <div ref={slide1} className="slider-item selected" style={{ backgroundImage: `url('./images/d7307596991754fa6a6d299e24071e16.jpg')` }}></div>
      <div ref={slide2} className="slider-item" style={{ backgroundImage: `url('./images/6263136925ab9fe1f3b46814a7610ab1.jpg')` }}></div>
      <div ref={slide3} className="slider-item" style={{ backgroundImage: `url('./images/f5849cbb3fdd462ec2d075eaf2048683.jpg')` }}></div>
    </div>
    </>
  ); };

  const Recipe = () => {
      return(
      <>
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
      </>);};
   


      
    
  

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
          <Slider />
          <Recipe />
        </div>
      </div>
    </div>
  );

}


export default MainPage;

