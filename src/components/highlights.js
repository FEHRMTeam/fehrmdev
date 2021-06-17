import React from 'react';
import { Link } from 'gatsby';
import topLeftCTAImage from '../images/cta-icon1.png';
import topRightCTAImage from '../images/cta-icon2.png';
import bottomLeftCTAImage from '../images/cta-icon3.png';
import bottomRightCTAImage from '../images/cta-icon4.png';

/*
  Use this section to highlight key elements of your site. Some sites will only have two while others may have six to eight. 
*/

const Highlights = () => (
  <section className="usa-graphic-list usa-section usa-section--dark">
    <div className="grid-container">
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={topLeftCTAImage} alt="Mission-Driven" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Mission-Driven
            </h3>
            <p>
              The FEHRM’s primary mission is to implement a single, common federal EHR to enhance patient care and provider effectiveness. <Link to="/about-fehrm">Learn more about the FEHRM.</Link>
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={topRightCTAImage} alt="Partnering for Success" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Partnering for Success
            </h3>
            <p>
            The federal EHR saves providers time and enables more standard workflows to support enhanced clinical decision-making and patient safety. <Link to="/success-stories">Learn more about how the federal EHR is driving success in health care delivery.</Link>
            </p>
          </div>
        </div>
      </div>
      <div className="usa-graphic-list__row grid-row grid-gap">
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={bottomLeftCTAImage} alt="A Commitment to Patients" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              A Commitment to Patients
            </h3>
            <p>
              The FEHRM is driving federal solutions to support effective health care delivery within the federal space that puts patients in the center. <Link to="/enhancing-your-care">Learn more about the benefits of the federal EHR to patients.</Link>
            </p>
          </div>
        </div>
        <div className="usa-media-block tablet:grid-col">
          <img className="usa-media-block__img" src={bottomRightCTAImage} alt="Collaborating with the Private Sector" />
          <div className="usa-media-block__body">
            <h3 className="usa-graphic-list__heading">
              Collaborating with the Private Sector
            </h3>
            <p>
            Enhancing the ability of DOD and VA providers to quickly and securely access patient electronic health information from participating private sector providers, the joint health information exchange (HIE) significantly expands interoperability capabilities. <Link to="improving-care-delivery">Learn more how the joint HIE is transforming care.</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Highlights;
