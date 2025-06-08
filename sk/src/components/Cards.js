import React from 'react';
import '../visuals/Cards.css';
import CardItem from './CardItem';
import {PAST} from "../constants";

function Cards() {
  return (
    <div className='cards' id="cards">
      <h1>{PAST.title}</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              text={PAST.sustainability}
              label='Sustainability'
              path='/services'
            />
            <CardItem
              text={PAST.corporate}
              label='Corporate'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              text={PAST.legal}
              label='Legal'
              path='/services'
            />
            <CardItem
              text={PAST.finance}
              label='Financial'
              path='/services'
            />
            <CardItem
              text={PAST.it}
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