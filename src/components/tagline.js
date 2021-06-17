import React from 'react';
import { Link } from 'gatsby';

/*
  This tagline will appear in your homepage
*/

const Tagline = () => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <p className="font-heading-xs margin-top-0 tablet:margin-bottom-0 text-italic" style={{color: '#585859'}}>
          “At the heart of health care are relationships between health care professionals and the patients they serve. Health information technology done right enhances those relationships —when it delivers the right data and the right digital experience at the right time—improving health, quality and the care experience for all.”
        </p>
        <p className="font-heading-xs tablet:margin-bottom-0">– FEHRM Senior Advisor and Clinician</p>
      </div>
      <div className="tablet:grid-col-8 usa-prose">
        <p>
          The Federal Electronic Health Record Modernization (FEHRM) program office works within the federal space to implement a single, common federal electronic health record (EHR) that enhances patient care and provider effectiveness. The FEHRM <Link to="/about-fehrm">unites efforts and delivers common capabilities</Link> that enable the Department of Defense (DOD), Department of Veterans Affairs (VA), Department of Homeland Security’s U.S. Coast Guard (USCG) and other federal agencies to deploy the federal EHR. Common capabilities refer to common solutions, tools and activities needed to effectively implement the federal EHR and ensure meaningful data sharing between the federal EHR and community providers.
        </p>
        <p>
          The federal EHR helps health care systems within the federal space and beyond effectively deliver health care and benefits by bringing a common record to their patients and providers. 
        </p>
        <p>
          As of April 2021, there are more than 42,000 federal EHR users (doctors, nurses, etc.) at 42 Military Medical Treatment Facility Commands, two VA sites and four USCG sites across 16 states. There is recognition across the board that the federal EHR <Link to="/success-stories">saves providers time and enables more standard workflows to support enhanced clinical decision-making and patient safety.</Link>
        </p>
      </div>
    </div>
  </section>
);

export default Tagline;
