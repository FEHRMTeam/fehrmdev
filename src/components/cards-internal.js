import React from 'react';
import Card from './card';

/*
  This card section will appear in your internal card layout pages
*/

const CardsInternal = ({ cardsContent }) => {
  if (cardsContent && cardsContent.length == 6) {
    return (
      <section className="grid-container usa-section padding-bottom-0">
        <ul className="usa-card-group">
          <Card cardContent={cardsContent[0]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[1]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[2]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[3]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[4]} className={"grid-col-4"} />
          <Card cardContent={cardsContent[5]} className={"grid-col-4"} />
        </ul>
      </section>
    )
  } else if (cardsContent && cardsContent.length == 4) {
    return (
      <section className="grid-container usa-section padding-bottom-0">
        <ul className="usa-card-group">
          <Card cardContent={cardsContent[0]} className={"grid-col-6"} />
          <Card cardContent={cardsContent[1]} className={"grid-col-6"} />
          <Card cardContent={cardsContent[2]} className={"grid-col-6"} />
          <Card cardContent={cardsContent[3]} className={"grid-col-6"} />
        </ul>
      </section>
    )
  }
};

export default CardsInternal;
