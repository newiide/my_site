import './main_page.css';

const Header = () => {
     return (
          <header>
          <ul class="left-menu">
              <li onClick={() => window.location.href = "main_page.js"}
          class="home">
                Home</li>
              <li>Recipes</li>
              <li>Advice</li>
              <li>Contact</li>
          </ul>
          <ul class="right-menu">
              <li
              onClick={() => window.location.href = "sign_in_page.js"}
              class="sign in">
                Log In</li>
              <li>Sign In</li>
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
            <div className="img">
              <img src="./fg.jpg" alt="Art School Australia" />
              <div className="headersmall">Exotic Recipes</div>
              <div className="textsmall">
                pupupp uppupupu. uppupupu, up p puppp upupup upuppupup
                pupupupupup upupupu.
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <img src="./22.jpg" alt="English in Argentina" />
              <div className="headersmall">Detailed Steps</div>
              <div className="textsmall">
                pupupp uppupupu. uppupupu, up p puppp upupup upuppupup
                pupupupupup upupupu.
              </div>
            </div>
          </div>
          <div className="grid-item">
            <div className="img">
              <img src="./fgfgg.jpg" alt="Engineering" />
              <div className="headersmall"></div>
              <div className="textsmall">
                pupupp uppupupu. uppupupu, up p puppp upupup upuppupup
                pupupupupup upupupu.
              </div>
            </div>
          </div>
          {/* Додайте подібні блоки для інших партнерів */}
        </div>
      </>
    );
  };
    

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
       </div>
     );
   }
   
   export default MainPage;