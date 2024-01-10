import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './site/main_page';
import SignIn from './site/sign_in_page';
import AdvicesPage from './site/advices';
import SignInPage from './site/sign_in_page';

function App () {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/advices" element={<AdvicesPage />} />
      <Route path="/sign_in_page" element={<SignIn />} />

      <Route path="/" element={<SignInPage />} />
      <Route path="/main_page" element={<MainPage />} />
      
      
    </Routes>
  );
}

export default App;