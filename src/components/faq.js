import React from 'react';

/*
  This FAQ will appear in FAQ pages
*/

const Faq = ({ content, expand }) => {

  return (
    <>
        <h3 className="usa-accordion__heading">
            <button type="button" className="usa-accordion__button" aria-expanded={expand} aria-controls={content.questionid}>
                {content.question}
            </button>
        </h3>
        <div id={content.questionid} className="usa-accordion__content" hidden={( expand === false ? "hidden" : "")}>
            <p dangerouslySetInnerHTML={{ __html: content.answer}}></p>
        </div>
    </>
  )
};

export default Faq;
