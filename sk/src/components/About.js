import React from 'react'
import './About.css'
import {Button} from "./Button";

const About = () => {
  return (
    <div className='about' id='about'>
      <div className='container'>
        <img src='images/selma.jpg' alt='selma' />
        <div className='col-2'>
          <h2>Hakkımda</h2>
          <span className='line'></span>
          <p>{"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at interdum velit, " +
            "et ultricies nisl. Integer fermentum justo et quam sagittis tempor. Etiam eget quam ut " +
            "metus consectetur sodales. Vivamus pellentesque eu odio in egestas. Vivamus hendrerit blandit " +
            "enim ut sollicitudin. Cras a mattis ex, varius molestie urna. Donec viverra, " +
            "leo non faucibus accumsan, nunc sem consequat leo, a tincidunt purus ipsum eu tortor. " +
            "Donec lobortis efficitur risus a pellentesque."}</p>
          <p>Ben Selma Kurtay, SK Danışmanlık da benim vergi kaçırmak için kurduğum firmam.</p>
          <Button
            className='btn'
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            onClick={() => console.log("Learn more")}
          >
            Daha Fazla Öğren
          </Button>
        </div>
      </div>
    </div>
  )
}

export default About