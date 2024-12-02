import React from 'react';
import Faq from './faq'

/*
  This list of FAQs will appear in FAQ pages
*/

const Faqs = ({ content }) => {

const generateId = () => (typeof window !== `undefined` ? crypto.randomUUID() : "");

  return (
    <div className="usa-accordion usa-accordion--bordered" data-allow-multiple>
        {
          (content &&
          content.length > 0 &&
          content.map (
            (contentItem) => (
                (contentItem == content[0] ? 
                    <Faq content={contentItem} uid={generateId()} expand={true} key={generateId()} /> :
                    <Faq content={contentItem} uid={generateId()} expand={false} key={generateId()} />
                )
                
            )
          ))
        }
    </div>
  )
};

export default Faqs;
