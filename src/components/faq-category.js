import React from 'react';
import FaqSubcategory from '../components/faq-subcategory';

/*
  This FAQ category will appear on multi-FAQ pages that display several categories
*/

const FaqCategory = ({ title, subcategories }) => {

  return (
    <div>
        {title && <h2>{title}</h2>}
        {subcategories.map((sub, index) => (
            <FaqSubcategory title={sub.category_subheading} key={index} questions={sub.faqQuestions} />
        ))}
    </div>
  )
};

export default FaqCategory;
