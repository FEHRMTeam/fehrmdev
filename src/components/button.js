import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

/*
  This button will appear on the FAQ main page
*/

const Button = ({ heading, url, className, faqImage }) => {
  const { basePath } = useSiteMetadata();

  const getUrl = () => (
    (url.indexOf('http') > -1 ? (
      url
    ) : (
      `${basePath}${url}`
    ))
  );

  const getClassName = () => (
    (className === "grid-col-6" ? "usa-card tablet:grid-col-6 minh-card" : "usa-card tablet:grid-col-6 minh-card")
  );

  return (
    <li className={getClassName()}>
      <a href={getUrl()}>
        <div className="usa-card__container align-center">
          <div className="usa-card__media">
            <div className="usa-card__img">
              <img
                src={faqImage.image}
                alt={faqImage.alt}
              />
            </div>
          </div>
          <div className="usa-card__body align-card-center">
            <h2 className="align-text-center">{heading}</h2>
          </div>
        </div>
      </a>
    </li>
    )
};

export default Button;