import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container' id="hero">
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <h1>SK Danışmanlık</h1>
      <p>by Selma Kurtay</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Bilgi Al
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;