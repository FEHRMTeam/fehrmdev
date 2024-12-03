import React from 'react';
import Faq from './faq'

/*
  This list of FAQs will appear in FAQ pages
*/

const Faqs = ({ content }) => {

  return (
    <div className="usa-accordion usa-accordion--bordered" data-allow-multiple>
        {
          (content &&
          content.length > 0 &&
          content.map (
            (contentItem) => (
                (contentItem == content[0] ? 
                    <Faq content={contentItem} expand={true} key={contentItem.questionid} /> :
                    <Faq content={contentItem} expand={false} key={contentItem.questionid} />
                )
                
            )
          ))
        }
    </div>
  )
};

export default Faqs;
