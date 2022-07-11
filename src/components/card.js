import React from 'react';

/*
  This card will appear in your homepage cards section
*/

const Card = ({ cardContent }) => (
  <li class="usa-card tablet:grid-col-4">
    <div class="usa-card__container">
      <div class="usa-card__header">
        <h2 class="usa-card__heading" dangerouslySetInnerHTML={{ __html: cardContent.heading }}></h2>
      </div>
      <div class="usa-card__media usa-card__media--exdent">
        <div class="usa-card__img">
          <img
            src={cardContent.cardImage.image}
            alt={cardContent.cardImage.alt}
          />
        </div>
      </div>
      <div class="usa-card__body">
        <p dangerouslySetInnerHTML={{ __html: cardContent.description }}></p>
      </div>
      <div class="usa-card__footer">
        <a className="usa-button" href={cardContent.button.url}>
          {cardContent.button.text}
        </a>
      </div>
    </div>
  </li>
);

export default Card;
