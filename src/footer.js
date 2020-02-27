import React from 'react';
import './App.css';

function Footer() {
  return (
      <div className = "footer">
        <div className = "input-container">
            <input className = "input"/> 
        </div>
        <div className = "control">
            <button className = "button">저 장</button>
            <button className = "button">취 소</button>
            <button className = "button">삭 제</button>
            <button className = "button">수 정</button>
        </div>
      </div>      
  );
}

export default Footer;
