import React from 'react';
import Card from './card'

/*
  This card section will appear in your homepage
*/

const Cards = ({ cardsContent }) => {
  if (cardsContent && cardsContent.length >= 3) {
    return (
      <section className="grid-container usa-section padding-bottom-0">
        <ul className="usa-card-group">
          <Card cardContent={cardsContent[0]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[1]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[2]} className={"grid-col-4"} />
        </ul>
      </section>
    )
  }
};

export default Cards;
