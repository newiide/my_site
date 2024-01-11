import React from 'react';
import './advices.css';
import { scrollToBottom, ScrollToTopButton } from './main_page_components';
import { NavLink } from 'react-router-dom';
import Image1 from './images/advice1.jpg';
import Image2 from './images/advice2.jpg';
import Image3 from './images/advice3.jpg';
import Image4 from './images/advice4.jpg';
import Image5 from './images/imageslide.jpg';
import Image6 from './images/imageslide2.jpg';

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
const Advices = () => {
    return (
        <>
        <div className="number-of-advice">ADVICE 1</div>
            <div className="advice1">
                <div className="photo1"
                    style={{
                        backgroundImage: `url(${Image1})`,
                    }}>
                </div>
                <div className="textphoto1">
                    <div className="title-advice">
                        Experiment with flavors
                    </div>
                    <div className="text-advice">
                        Elevate your culinary journey by fearlessly experimenting with an array of spices and herbs.
                        Discover the magical synergy of unexpected flavor pairings, turning each dish into a unique masterpiece.
                    </div>
                </div>
            </div>

            <div className="number-of-advice2">ADVICE 2</div>
            <div className="advice2">
                
                <div className="textphoto2">
                    <div className="title-advice2">
                    Health and Diets
                    </div>
                    <div className="text-advice">
                    Empower your audience with knowledge about nutritious eating.
                    Offer insights into the health benefits of specific ingredients, and provide recipes that align with different dietary preferences.
                    </div>
                </div>
                <div className="photo2"
                    style={{
                        backgroundImage: `url(${Image2})`,
                    }}>
                </div>
            </div>

            <div className="number-of-advice">ADVICE 3</div>
            <div className="advice1">
                <div className="photo1"
                    style={{
                        backgroundImage: `url(${Image3})`,
                    }}>
                </div>
                <div className="textphoto1">
                    <div className="title-advice">
                    Culinary Trends Worldwide
                    </div>
                    <div className="text-advice">
                    Stay on the cutting edge of culinary trends. 
                    Explore and share the latest innovations, techniques, and global flavors that are making waves in the food world.
                    </div>
                </div>
            </div>


            <div className="number-of-advice2">ADVICE 4</div>
            <div className="advice2">
                
                <div className="textphoto2">
                    <div className="title-advice2">
                    Learn Cooking Techniques
                    </div>
                    <div className="text-advice">
                    Familiarize yourself with various cooking techniques such as frying,
                     boiling, grilling, and braising. This opens up new possibilities in culinary arts.
                    </div>
                </div>
                <div className="photo2"
                    style={{
                        backgroundImage: `url(${Image4})`,
                    }}>
                </div>
            </div>
        </>

    );
}

const AdvicesPage = () => {
    return (
        <div className="backgroundadvice">
            <div className="container_main_advice">
                <div className="Header-background">
                    <Header />
                    <scrollToBottom />
                    <ScrollToTopButton />
                </div>
                <div className="containerAdvice">
                    <Advices />
                </div>
            </div>
        </div>
    );
}

export default AdvicesPage;