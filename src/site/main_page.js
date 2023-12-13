import './main_page.css';

const MainPage = () => {
     return (
     <div class="container">
     <div class="main-picture">
          <div class="filter"></div>
     <div class="container_main">
     <header>
      <li1>Home</li1>
      <li1>Recipes</li1>
      <li1>Advice</li1>
      <li1>Contact</li1>
      <li2>Log In</li2>
      <li2>Sign In</li2>
     </header>
      <div>
       <div class="title">
        Name??
       </div>
       <div class="description">
       The taste of home, ok for the soul<br /><br />
   
        Explore the world of food
       </div>

       <div>
        <input type="email" placeholder="What do you want to cook?" />
        <button>submit</button>
        </div>
       </div>
      </div>
     </div>
    </div>
         


          
     )
}


export default MainPage;