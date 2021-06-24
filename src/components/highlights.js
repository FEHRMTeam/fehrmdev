import React from 'react';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = ({ callToActions }) => {
  const { topLeftCTA, topRightCTA, bottomLeftCTA, bottomRightCTA } = callToActions;

  return (
    <section className="usa-graphic-list usa-section usa-section--dark">
      <div className="grid-container">
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={topLeftCTA.CTAImage.image} alt={topLeftCTA.CTAImage.imageAlt} />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {topLeftCTA.heading}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: topLeftCTA.subHeading }}>
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={topRightCTA.CTAImage.image} alt={topRightCTA.CTAImage.imageAlt} />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {topRightCTA.heading}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: topRightCTA.subHeading }}>
              </p>
            </div>
          </div>
        </div>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={bottomLeftCTA.CTAImage.image} alt="Alt text" width="124px" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {bottomLeftCTA.heading}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: bottomLeftCTA.subHeading }}>
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={bottomRightCTA.CTAImage.image} alt="Alt text" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {bottomRightCTA.heading}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: bottomRightCTA.subHeading }}>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
