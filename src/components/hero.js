import React from 'react';
import Slider from "react-slick";

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

// const Hero = ({ heroCallout }) => (
const Hero = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
  };

  return (
  <section className="usa-hero">
    {/* <div className="grid-container"> */}
      <Slider {...settings}>
        <div className="img-contain" style="color:black">
        {/* style="background-image: url(/images/home-hero.png);"> */}
          {/* <h3>test</h3> */}
          <img src="/images/home-hero.png" />
        </div>
        <div className="img-contain" style="color:black">
        {/* style="background-image: url(/images/home-hero.png);"> */}
          {/* <h3>test2</h3> */}
          <img src="/images/home-hero.png" />
        </div>
      </Slider>
      {/* <div className="usa-hero__callout">
        <h2 className="usa-hero__heading"
            dangerouslySetInnerHTML={{ __html: heroCallout.calloutHeaderText }}>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: heroCallout.calloutSupportText }}>
        </p>
        <a className="usa-button" href={heroCallout.callToActionUrl}>
          {heroCallout.callToActionBtnText}
        </a>
      </div> */}
    {/* </div> */}
  </section>
)};

export default Hero;
