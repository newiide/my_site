
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './site/main_page';
import SignIn from './site/sign_in_page';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sign_in_page" element={<SignIn />} />
      </Routes>
    </Router>
  );
}
App();

const renderApp = () => {
  ReactDOM.render(
    <React.StrictMode>
      <MainPage />
    </React.StrictMode>,
    document.getElementById('root')
  );
};

renderApp();

export default MainPage;
