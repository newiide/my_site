import './recipe_kimchi.css';
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';

import { scrollToBottom, ScrollToTopButton } from '../main_page/main_page_components';


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

const Kimchi_ingredients = () => {
  return (
    <div className="kimchi_ingredients">
      <div className="title-kimchi">
        Ingredients
      </div>
      <div className="parts">
      <div className="first-part">
        <ul>
          <li> 3 tablespoons unsalted butter</li>
          <li> 1 cup roughly chopped kimchi (6 ounces)</li>
          <li> 2 tablespoons kimchi juice, or to taste</li>
          <li> ½cup small-dice Spam, ham or leftover cooked meat</li>
          <li> 2 cups cooked, cooled rice (preferably short-grain)</li>
          <li> Crumbled or slivered nori (roasted seaweed) for garnish</li>
        </ul>
      </div>
      <div className="second-part">
        <ul>
          <li> Sesame seeds for garnish</li>
          <li> 2 eggs</li>
          <li> 2 teaspoons vegetable oil</li>
          <li> 1 teaspoon sesame oil, or to taste</li>
          <li> 2 teaspoons soy sauce, or to taste </li>
          <li> Sesame seeds for garnish</li>
        </ul>
      </div>
      </div>
    </div>
  );
}

const Steps = () => {
  return(
    <>
<div className="container-steps">
<div className="title-step">
        Step 1
      </div>
      <div className="kimchi-text">
       On medium high heat preheat a pan/wok and once heated, add the cooking oil and spread it well with a spatula. <br></br><br></br>
 Add garlic to the pan and stir for 10 seconds. Next, add bacon and stir until half-cooked.
      </div>
      <div className="kimchi-step-photo" style={{ backgroundImage: `url('./images/step1.jpg')`}}>

      </div>
</div>
<div className="container-steps">
<div className="title-step">
        Step 2
      </div>
      <div className="kimchi-text">
      Add the kimchi to the pan, stirring until it’s 80% cooked.
      </div>
      <div className="kimchi-step-photo" style={{ backgroundImage: `url('./images/step2.jpg')`}}>

      </div>
</div>
<div className="container-steps">
<div className="title-step">
        Step 3
      </div>
      <div className="kimchi-text">
      (Optional) Add the mushrooms and mix them well for a few seconds. Reduce the heat to medium-medium low.
      </div>
      <div className="kimchi-step-photo" style={{ backgroundImage: `url('./images/step3.jpg')`}}>

      </div>
</div>
<div className="container-steps">
<div className="title-step">
        Step 4
      </div>
      <div className="kimchi-text">
      Add the rice and the kimchi juice. Mix all of them together well and thoroughly.
      </div>
      <div className="kimchi-step-photo" style={{ backgroundImage: `url('./images/step4.jpg')`}}>

      </div>
</div>
<div className="container-steps">
<div className="title-step">
        Step 5
      </div>
      <div className="kimchi-text">
      Add the sesame oil and mix them well. Remove the pan from the heat.
      </div>
      <div className="kimchi-step-photo" style={{ backgroundImage: `url('./images/step5.jpg')`}}>

      </div>
</div>
<div className="container-steps">
<div className="title-step">
        Step 6
      </div>
      <div className="kimchi-text">
      Serve the kimchi fried rice on a plate. Garnish with the sesame seeds, 
      green onions, and seaweed strips (all optional). Place the cooked egg on top. Enjoy!
      </div>
      <div className="kimchi-step-photo" style={{ backgroundImage: `url('./images/step6.jpg')`}}>

      </div>
</div>
</>
  );
}



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


const Kimchi = () => {
  return (
    <div className="container">
      <div className="back_kimchi">
        <div className="container-main">
          <Header />
          <div className="Kimchi_title" >
            KIMCHI FRIED RICE RECIPE
          </div>
          <Slider_kimchi />
          <Kimchi_ingredients />
          <Steps />
        </div>

      </div>
      <ScrollToTopButton />
      <Foooter />
    </div>
  );
}

export default Kimchi;