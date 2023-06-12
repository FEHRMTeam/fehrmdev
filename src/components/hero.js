import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = ({ heroCallout }) => {
  const { basePath } = useSiteMetadata();

  return (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading"
            dangerouslySetInnerHTML={{ __html: heroCallout.calloutHeaderText }}>
        </h2>
        <p dangerouslySetInnerHTML={{ __html: heroCallout.calloutSupportText }}>
        </p>
        <a className="usa-button" href={`${basePath}${heroCallout.callToActionUrl}`}>
          {heroCallout.callToActionBtnText}
        </a>
      </div>
    </div>
  </section>
  )
  };

export default Hero;
