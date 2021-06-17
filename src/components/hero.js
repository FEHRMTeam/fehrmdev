import React from 'react';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = () => (
  <section className="usa-hero">
    <div className="grid-container">
      <div className="usa-hero__callout">
        <h2 className="usa-hero__heading">
          <span className="usa-hero__heading--alt">Enhancing the Care Experience</span>
        </h2>
        <p>
          The FEHRM is implementing a single, common federal electronic health record that enhances patient care and provider effectiveness.
        </p>
        <a className="usa-button" href="/about-fehrm">
          Learn more
        </a>
      </div>
    </div>
  </section>
);

export default Hero;
