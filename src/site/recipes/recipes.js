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
                    </div>
                </div>
                <ScrollToTopButton />
            </div>
        </>
    );
}
export default Recipes