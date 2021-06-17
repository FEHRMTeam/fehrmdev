import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = ({ heroCallout }) => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading"
            dangerouslySetInnerHTML={{ __html: heroCallout.calloutHeaderText }}>
          {/* <span className="usa-hero__heading--alt">Hero callout:</span>Bring
          attention to a project priority */}
        </h2>
        <p dangerouslySetInnerHTML={{ __html: heroCallout.calloutSupportText }}>
          {/* Support the callout with some short explanatory text. You don’t need
          more than a couple of sentences. */}
        </p>
        <a className="usa-button" href={heroCallout.callToActionUrl}>
          {heroCallout.callToActionBtnText}
          {/* Call to action */}
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
