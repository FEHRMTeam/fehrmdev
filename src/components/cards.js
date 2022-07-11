import React from 'react';
import Card from './card'

/*
  This card section will appear in your homepage
*/

const Cards = ({ cardsContent }) => {
  if (cardsContent && !cardsContent.hide) {
    return (
      <section className="grid-container usa-section usa-prose">
        <ul className="usa-card-group">
          {
            (cardsContent.cards &&
              cardsContent.cards.length > 0 &&
              cardsContent.cards.map (
                (card) => <Card cardContent={card} key={card.heading} />
              )
            )
          }
        </ul>
      </section>
    )
  }
};

export default Cards;
