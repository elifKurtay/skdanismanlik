import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards' id="cards">
      <h1>Önceki Hizmetlerimiz</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Sustainability'
              path='/services'
            />
            <CardItem
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Corporate'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Sustainability'
              path='/services'
            />
            <CardItem
              text='Experience Football on Top of the Himilayan Mountains'
              label='Financial'
              path='/services'
            />
            <CardItem
              text='Ride through the Sahara Desert on a guided camel tour'
              label='IT'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;