import './main_page.css';
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import { scrollToBottom, ScrollToTopButton } from './main_page_components';

const Header = () => {

  return (
    <header>
      <ul class="left-menu">
        <li>Home</li>
        <li><NavLink to="/recipes">Recipes</NavLink></li>
        <li><NavLink to="/advices">Advices</NavLink></li>
        <li className="Contact" onClick={scrollToBottom}>Contact</li>
      </ul>
      <ul class="right-menu">
        <li><NavLink to="/sign_in_page">Sign In</NavLink></li>
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
      const selectedIndex = slidesRefs.findIndex(ref =>
        ref.current.classList.contains('selected')
      );
      const nextIndex = (selectedIndex + 1) % slidesRefs.length;

      slidesRefs[selectedIndex].current.classList.remove('selected');
      slidesRefs[nextIndex].current.classList.add('selected');
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="slider">
      <div className="slider-item selected" ref={slide1} style={{ zIndex: 3, backgroundImage: `url('./images/d7307596991754fa6a6d299e24071e16.jpg')` }}></div>
      <div className="slider-item" ref={slide2} style={{ zIndex: 2, backgroundImage: `url('./images/6263136925ab9fe1f3b46814a7610ab1.jpg')` }}></div>
      <div className="slider-item" ref={slide3} style={{ zIndex: 1, backgroundImage: `url('./images/f5849cbb3fdd462ec2d075eaf2048683.jpg')` }}></div>
    </div>
  );
};


const Recipe = () => {
  return (
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
          <div className="small-description">
            Don't miss the opportunity, you must to try this delicious dish!
          </div>
        </div>

        <NavLink to="/recipe_kimchi" smooth={true} duration={500}>
          <button>
            <span>MORE</span>
          </button>
        </NavLink>
      </div>

    </>);
};

const Foooter = () => {
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






const MainPage = () => {
  return (
    <div className="container">
      <div className="main-picture">
        <div className="container_main">

          <Header />
          <scrollToBottom />
          <div className="Name">
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
      <Foooter />
      <ScrollToTopButton />
    </div>
  );
};

export default MainPage;
