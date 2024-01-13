import './recipes.css';
import { scrollToBottom, ScrollToTopButton } from '../main_page/main_page_components';
import React, { useState, useRef, useEffect } from "react";
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <header>
            <ul class="left-menu">
                <li><NavLink to="/main_page">Home</NavLink></li>
                <li><NavLink to="/recipes">Recipes</NavLink></li>
                <li><NavLink to="/advices">Advices</NavLink></li>
                <li className="Contact" onClick={scrollToBottom}>Contact</li>
            </ul><ul class="right-menu">
                <li><NavLink to="/sign_in_page">Sign In</NavLink></li>
                <li>Log In</li>
            </ul>
        </header>
    );
}

const dataRecipe = [
    {
        title: "Tteokbokki",
        description: "A delicious snack made from rice sticks that have a sweet and spicy taste.",
        imageUrl: "./images/recipe1.jpg",

    },
    {
        title: "Kimchi rice",
        description: "Kimchi and rice is stir fried with smoky bacon and spicy kimchi juice. It’s simply delicious!",
        imageUrl: "./images/2.jpg",
        link: "/recipe_kimchi",

    },
    {
        title: "Bibimbap",
        description: "A delicious snack made from rice sticks that have a sweet and spicy taste.",
        imageUrl: "./images/recipe2.jpg",

    },
    {
        title: "Spicy cod fillets",
        description: "A delicious snack made from rice sticks that have a sweet and spicy taste.",
        imageUrl: "./images/recipe3.jpg",

    },
    {
        title: "Minari side",
        description: "A delicious snack made from rice sticks that have a sweet and spicy taste.",
        imageUrl: "./images/recipe4.jpg",

    },
    {
        title: "Oxtail soup",
        description: "A delicious snack made from rice sticks that have a sweet and spicy taste.",
        imageUrl: "./images/recipe5.jpg",

    },
    {
        title: "Sea pancakes",
        description: "A delicious snack made from rice sticks that have a sweet and spicy taste.",
        imageUrl: "./images/recipe6.jpg",


    },
];


const GridRecipes = () => {
    return (
        <div className="GridRecipes">
            {dataRecipe.map((data, index) => (
                <div className="grid-item" key={index}>

                    <div
                        className="img" style={{
                            backgroundImage: `url(${data.imageUrl})`,
                            '--data-image': `url(${data.imageUrl})`,
                        }}></div>

                    <div className="headersmall">{data.title}</div>
                    <div className="textsmall">{data.description}</div>
                    <NavLink to={data.link} className="button">
                        <button className="buttton">
                            <span>MORE</span>
                        </button>
                    </NavLink>
                </div>
            ))}
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

const Recipes = () => {
    return (
        <>
            <div className="container">
                <div className="back_recipes">
                    <div className="container-main">
                        <Header />
                        <scrollToBottom />
                        <div className="Recipes_title" >
                            RECIPES
                        </div>
                        <div className="AddYourRecipe">
                            Do you wanna share your recipe with us?
                        </div>
                        <button class="try">TRY!</button>
                        <GridRecipes />
                    </div>
                </div>
                <Foooter />
                <ScrollToTopButton />
            </div>
        </>
    );
}
export default Recipes