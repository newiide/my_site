import React from 'react';
import './advices.css';
import { scrollToBottom, ScrollToTopButton } from '../main_page/main_page_components';
import { NavLink } from 'react-router-dom';
import Image1 from './images/advice1.jpg';
import Image2 from './images/advice2.jpg';
import Image3 from './images/advice3.jpg';
import Image4 from './images/advice4.jpg';



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

  
const AdvicesPage = () => {
    return (
        <>
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
                <div className="container-slider-advice">
                    <div className="Good-luck">Enjoy your cooking!</div>
                    
                    
                </div>
            </div>
        </div>
        <Foooter />
        </>
    );
}

export default AdvicesPage;