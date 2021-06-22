import React from 'react';
import { Link } from 'gatsby';

/*
  This tagline will appear in your homepage
*/

const Tagline = ({ taglineContent }) => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <div className="tablet:grid-col-4">
        <div dangerouslySetInnerHTML={{ __html: taglineContent.taglineHeadingText }}></div>
      </div>
      <div className="tablet:grid-col-8 usa-prose"
           dangerouslySetInnerHTML={{ __html: taglineContent.taglineDescription }}></div>
    </div>
  </section>
);

export default Tagline;
