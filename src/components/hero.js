import React from 'react';
import { Carousel, CarouselItem } from 'react-bootstrap';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = ({ heroCallout }) => (
  <section className="usa-hero">
    <Carousel
      indicators={false}
      controls={false}
      keyboard={true}>
      <CarouselItem>
        <img src="/images/home-hero.png" />
      </CarouselItem>
      <CarouselItem>
        <img src="/images/home-hero.png" />
      </CarouselItem>
    </Carousel>
    {/* <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading"
            dangerouslySetInnerHTML={{ __html: heroCallout.calloutHeaderText }}>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: heroCallout.calloutSupportText }}>
        </p>
        <a className="usa-button" href={heroCallout.callToActionUrl}>
          {heroCallout.callToActionBtnText}
        </a>
      </div>
    </div> */}
  </section>
);

export default Hero;
