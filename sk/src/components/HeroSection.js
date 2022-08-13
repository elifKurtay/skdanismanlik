import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons'

function HeroSection() {
  return (
    <div className='hero-container'>
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
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={() => console.log('hey')}
        >
          {"İletişime Geç "}
          <FontAwesomeIcon icon={faPlayCircle} />
        </Button>
      </div>
    </div>
  );
}

export default HeroSection;