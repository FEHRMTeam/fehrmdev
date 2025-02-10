import React from 'react';
import Card from './card';

/*
  This card section will appear in your internal card layout pages
*/

const CardsInternal = ({ cardsContent }) => {
  const setClass = () => (
    (cardsContent.length % 3 === 0 ? "grid-col-4" :
      cardsContent.length === 1 ? "grid-col-6 grid-offset-3" : "grid-col-6")
  );

  if (cardsContent && cardsContent.length > 0) {
    return (
    <section className="grid-container usa-section padding-bottom-0">
      <ul className="usa-card-group">
        {
          cardsContent.map (
            (cardItem, idx) => (
              <React.Fragment key={cardItem.heading + idx} >
                <Card cardContent={cardItem} className={setClass()} key={cardItem.heading + idx} />
              </React.Fragment>
            )
          )
        }
      </ul>
    </section>
  )};
};

export default CardsInternal;
