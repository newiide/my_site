import './App.css';
import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom'; // Add useLocation import
import MainPage from './site/main_page/main_page';
import AdvicesPage from './site/advices/advices';
import SignIn from './site/sign_in/sign_in_page';
import SignInPage from './site/sign_in/sign_in_page';
import Kimchi from './site/recipe_kimchi/recipe_kimchi';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';

function ScrollToTop() {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function MyApp() {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/advices" element={<AdvicesPage />} />
      <Route path="/sign_in_page" element={<SignIn />} />
      <Route path="/recipe_kimchi" element={<Kimchi />} />
      <Route path="/" element={<SignInPage />} />
      <Route path="/main_page" element={<MainPage />} />
    </Routes>
  );
}

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <MyApp />
  </BrowserRouter>,
  document.getElementById('root')
);

export default MyApp;