import './App.css';
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainPage from './site/main_page';
import SignIn from './site/sign_in_page';

function App () {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="/sign_in_page" element={<SignIn />} />
    </Routes>
  );
}

export default App;