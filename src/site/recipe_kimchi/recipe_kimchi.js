import './recipe_kimchi.css';
import React, { useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';
import YouTube from 'react-youtube';

import { scrollToBottom, ScrollToTopButton } from '../main_page/main_page_components';


const Header = () => {

  return (
    <header>
      <ul class="left-menu">
        <li><NavLink to="/main_page">Home</NavLink></li>
        <li><NavLink to="/recipes">Recipes</NavLink></li>
        <li> <NavLink to="/advices">Advices</NavLink></li>
        <li className="Contact" onClick={scrollToBottom}>Contact</li>
      </ul>
      <ul class="right-menu"><li><NavLink to="/sign_in_page">Sign In</NavLink></li>
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

const stepsData = [
  {
    title: "Step 1",
    text: "On medium high heat preheat a pan/wok and once heated, add the cooking oil and spread it well with a spatula. Add garlic to the pan and stir for 10 seconds. Next, add bacon and stir until half-cooked.",
    imageUrl: "./images/step1.jpg",
  },
  {
    title: "Step 2",
    text: "Add the kimchi to the pan, stirring until it’s 80% cooked.",
    imageUrl: "/images/step2.jpg",
  },
  {
    title: "Step 3",
    text: "(Optional) Add the mushrooms and mix them well for a few seconds. Reduce the heat to medium-medium low.",
    imageUrl: "/images/step3.jpg",
  },
  {
    title: "Step 4",
    text: "Add the rice and the kimchi juice. Mix all of them together well and thoroughly.",
    imageUrl: "/images/step4.jpg",
  },
  {
    title: "Step 5",
    text: "Add the sesame oil and mix them well. Remove the pan from the heat.",
    imageUrl: "/images/step5.jpg",
  },
  {
    title: "Step 6",
    text: "Serve the kimchi fried rice on a plate. Garnish with the sesame seeds, green onions, and seaweed strips (all optional). Place the cooked egg on top. Enjoy!",
    imageUrl: "/images/step6.jpg",
  },
];

const Steps = () => {
  return (
    <>
      {stepsData.map((step, index) => (
        <div key={index} className="container-steps">
          <div className="title-step">{step.title}</div>
          <div className="kimchi-text">{step.text}</div>
          <div
            className="kimchi-step-photo"
            style={{
              backgroundImage: `url(${step.imageUrl})`,
              '--step-image': `url(${step.imageUrl})`,
            }}
          ></div>
        </div>
      ))}
    </>
  );
};

const Video = () => {
  const opts = {
    height: '525',
    width: '767,5',

  };

  return (
    <div className="container-video">
      <YouTube videoId="Lf44Fk7H24s" opts={opts} />
    </div>
  );
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
          <Video />
        </div>

      </div>
      <ScrollToTopButton />
      <Foooter />
    </div>
  );
}

export default Kimchi;