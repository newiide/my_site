
import './App.css';
import MainPage from './site/main_page';
import React from 'react';
import ReactDOM from 'react-dom';

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
