import React from 'react';
import '../App.css';
import './HeroSection.css';
import {ANASAYFA} from "../constants";

function HeroSection() {
  return (
    <div className='hero-container' id="hero">
      <h1>{ANASAYFA.title}</h1>
      <p>{ANASAYFA.owner}</p>
      <div className='hero-sub'>{ANASAYFA.second}</div>
    </div>
  );
}

export default HeroSection;