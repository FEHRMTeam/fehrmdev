import React from 'react';
import Faqs from './faqs';

/*
  This FAQ subcategory will appear on multi-FAQ pages that display several categories
*/

const FaqSubcategory = ({ title, questions }) => {

  return (
    <div>
        {title && <h3>{title}</h3>}
        <Faqs content={questions} />
    </div>
  )
};

export default FaqSubcategory;
