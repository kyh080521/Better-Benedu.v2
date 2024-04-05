import './style/App.css';
import React, { useState } from 'react';
import Nav from './components/Nav.js';
import Sidebar from './components/SideBar.js'
import LoginPage from './components/LoginPage.js';

function App() {
  return (
    <div className="App">
      <LoginPage />
    </div>
  );
}

export default App;