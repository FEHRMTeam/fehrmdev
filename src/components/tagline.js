import React from 'react';

/*
  This tagline will appear in your homepage
*/

const Tagline = ({ taglineContent }) => (
  <section className="grid-container usa-section usa-prose">
    <div className="grid-row grid-gap">
      <aside className="tablet:grid-col-4">
        <div dangerouslySetInnerHTML={{ __html: taglineContent.taglineHeadingText }}></div>
        <section>
          <h2 className="margin-top-5 margin-bottom-0" dangerouslySetInnerHTML={{ __html: taglineContent.calloutHeaderText }}></h2>
          <p className="margin-top-0 margin-bottom-1" dangerouslySetInnerHTML={{ __html: taglineContent.calloutSupportText }}></p>
          <a className="usa-button" href={taglineContent.callToActionUrl}>
            {taglineContent.callToActionBtnText}
          </a>
          <p className="margin-top-205" dangerouslySetInnerHTML={{ __html: taglineContent.calloutNoteText }}></p>
        </section>
      </aside>
      <div className="tablet:grid-col-8 usa-prose"
           dangerouslySetInnerHTML={{ __html: taglineContent.taglineDescription }}></div>
    </div>
  </section>
);

export default Tagline;
