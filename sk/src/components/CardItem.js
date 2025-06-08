import React from 'react';
import { Link } from 'react-router-dom';

function CardItem(props) {
  return (
    <>
      <li className='cards__item'>
        <Link className='cards__item__link'
              to={{
                pathname: props.path,
                state: {label: props.label}
              }}>
          <figure className='cards__item__pic-wrap' data-category={props.label}>
            <img
              className='cards__item__img'
              alt='Category Image'
              src={getImageSource(props.label)}
            />
          </figure>
          <div className='cards__item__info'>
            <h5 className='cards__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

function getImageSource(label) {
  if (label === "Sustainability") {
    return "images/sustainable.png"
  } else if (label === "Corporate") {
    return "images/company.png"
  } else if (label === "Financial") {
    return "images/budget.png"
  } else if (label === "IT") {
    return "images/blockchain.png"
  } else if (label === "Legal") {
    return "images/compliance.png"
  }
  return ""
}

export default CardItem;