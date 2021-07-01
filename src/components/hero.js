import React from 'react';
// import BackgroundSlider from 'gatsby-image-background-slider';
import BackgroundSlider from 'react-background-slider';
import heroImage from '../images/home-hero.png';
import { useStaticQuery, graphql } from 'gatsby';

/*
  This will be displayed on the homepage. Ideally, you want to highlight key goals of the website
*/

const Hero = ({ heroCallout }) => (
  // <BackgroundSlider
  //   query={useStaticQuery(graphql`
  //     query {
  //       backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
  //         nodes {
  //           relativePath
  //           childImageSharp {
  //             fluid (maxWidth: 4000, quality: 100){
  //               ...GatsbyImageSharpFluid
  //             }
  //           }
  //         }
  //       }
  //     }
  //   `)}
  //   initDelay={2}
  //   transition={4}
  //   duration={8}
  //   images={[heroImage]}></BackgroundSlider>
  <section className="usa-hero">
    <BackgroundSlider
      images={[heroImage]}
      duration={8}
      transition={4} />
    <div className="grid-container">
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
    </div>
  </section>
  
  
  // <section className="usa-hero">
  //   <div className="grid-container">
  //     <div className="usa-hero__callout">
  //       <h2 className="usa-hero__heading"
  //           dangerouslySetInnerHTML={{ __html: heroCallout.calloutHeaderText }}>
  //       </h2>
  //       <p dangerouslySetInnerHTML={{ __html: heroCallout.calloutSupportText }}>
  //       </p>
  //       <a className="usa-button" href={heroCallout.callToActionUrl}>
  //         {heroCallout.callToActionBtnText}
  //       </a>
  //     </div>
  //   </div>
  // </section>
);

export default Hero;
