import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './site/main_page/main_page';
import SignIn from './site/sign_in/sign_in_page';
import AdvicesPage from './site/advices/advices';
import SignInPage from './site/sign_in/sign_in_page';
import Kimchi from './site/recipe_kimchi/recipe_kimchi';
import Recipes from './site/recipes/recipes';

function App () {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/advices" element={<AdvicesPage />} />
      <Route path="/sign_in_page" element={<SignIn />} />
      <Route path="/recipe_kimchi" element={<Kimchi />} />
      <Route path="/recipes" element={<Recipes />} />

      <Route path="/" element={<SignInPage />} />
      <Route path="/main_page" element={<MainPage />} />
      <Route path="/recipes" element={<Recipes />} />

      <Route path="/" element={<AdvicesPage />} />
      <Route path="/recipes" element={<Recipes />} />
      
      
    </Routes>
  );
}

export default App;