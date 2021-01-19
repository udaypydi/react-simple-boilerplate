import React from 'react';
import Button from 'uielements/button/button.component';
import logo from './logo.png';
import 'assets/css/main.css';
import './app.scss';

/**
  App jsx - Roo file of app
**/
export default function App() {
  return (
    <div className="bg-blue-900 flex flex-col justify-center items-center p-20">
      <p className="text-4xl text-blue-100">Welcome To React Boilerplate!</p>
      <img src={logo} className="app--image" alt="logo" />
      <Button buttonText="Get Started!" />
    </div>
  );
}
