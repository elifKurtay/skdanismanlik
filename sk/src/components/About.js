import React from 'react'
import './About.css'
import {Button} from "./Button";
import {HAKKIMDA} from "../constants";

const About = () => {
  return (
    <div className='about' id='about'>
      <h1>{HAKKIMDA.title}</h1>
      <div className='container'>
        <img src='images/selma.jpg' alt='selma' />
        <div className='col-2'>
          <h2>{HAKKIMDA.sub_title}</h2>
          <span className='line'></span>
          <p>{HAKKIMDA.description}</p>
          <p>{HAKKIMDA.kisa}</p>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => window.open('https://www.linkedin.com/in/dr-selma-kurtay-53076227/', '_blank')}
          >
            {HAKKIMDA.buton}
          </Button>
        </div>
      </div>

      <div className='container'>
        <div className='col-2'>
            <h2>{HAKKIMDA.sub_title2}</h2>
            <span className='line'></span>
            <p>{HAKKIMDA.description2}</p>
        </div>
        <img src='images/companies.jpeg' alt='companies' />
      </div>
    </div>
  )
}

export default About