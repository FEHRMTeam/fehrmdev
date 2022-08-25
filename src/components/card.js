import React from 'react';

/*
  This card will appear in your homepage cards section
*/

const Card = ({ cardContent }) => (
  <li className="usa-card tablet:grid-col-4">
    <div className="usa-card__container">
      <div className="usa-card__header">
        <h2 className="usa-card__heading">{cardContent.heading}</h2>
      </div>
      <div className="usa-card__media">
        <div className="usa-card__img">
          <img
            src={cardContent.cardImage.image}
            alt={cardContent.cardImage.alt}
          />
        </div>
      </div>
      <div className="usa-card__body">
        <p dangerouslySetInnerHTML={{ __html: cardContent.description }}></p>
      </div>
      <div className="usa-card__footer">
        <a className="usa-button width-full" href={cardContent.button.url}>
          {cardContent.button.text}
        </a>
      </div>
    </div>
  </li>
);

export default Card;
