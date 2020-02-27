import React from 'react';
import './App.css';
import { useState } from 'react';
import { fire } from "./firebase/Firebase.js";

import Body from "./body"
import Footer from "./footer"

function App() {  
  return (
    <div className= "App">
      <header className= "header">   
        <p className = "header-title">FieldShare</p>
      </header>
      {/*DB 항목과 내용 */}
      <Body />
      <Footer />   
    </div>
  );
}

export default App;
