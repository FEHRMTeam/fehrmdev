import React from 'react';
import topLeftCTAImage from '../images/cta-icon1.png';
import topRightCTAImage from '../images/cta-icon2.png';
import bottomLeftCTAImage from '../images/cta-icon3.png';
import bottomRightCTAImage from '../images/cta-icon4.png';

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
            <img className="usa-media-block__img" src={topLeftCTAImage} alt={topLeftCTA.CTAImage.imageAlt} />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {topLeftCTA.heading}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: topLeftCTA.subHeading }}>
                {/* Graphic headings can be used a few different ways, depending on
                what your landing page is for. Highlight your values, specific
                program areas, or results. */}
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={topRightCTAImage} alt={topRightCTA.CTAImage.imageAlt} />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {topRightCTA.heading}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: topRightCTA.subHeading }}>
                {/* Keep body text to about 30 words. They can be shorter, but try to
                be somewhat balanced across all four. It creates a clean
                appearance with good spacing. */}
              </p>
            </div>
          </div>
        </div>
        <div className="usa-graphic-list__row grid-row grid-gap">
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={bottomLeftCTAImage} alt="Alt text" width="124px" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
                {bottomLeftCTA.heading}
                {/* Never highlight anything without a goal. */}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: bottomLeftCTA.subHeading }}>
                {/* For anything you want to highlight here, understand what your
                users know now, and what activity or impression you want from them
                after they see it. */}
              </p>
            </div>
          </div>
          <div className="usa-media-block tablet:grid-col">
            <img className="usa-media-block__img" src={bottomRightCTAImage} alt="Alt text" />
            <div className="usa-media-block__body">
              <h3 className="usa-graphic-list__heading">
              {bottomRightCTA.heading}
                {/* Could also have 2 or 6. */}
              </h3>
              <p dangerouslySetInnerHTML={{ __html: bottomRightCTA.subHeading }}>
                {/* In addition to your goal, find out your users’ goals. What do they
                want to know or do that supports your mission? Use these headings
                to show those. */}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Highlights;
