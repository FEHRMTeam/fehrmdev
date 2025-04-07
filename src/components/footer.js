import React from 'react';
import { Link } from 'gatsby';
import useSiteMetadata from '../hooks/use-site-metadata';

const Footer = ({ footerContent }) => { 
  const {
    footerImage,
    footerLink1,
    footerLink2,
    footerLink3,
    footerLink4,
    footerLink5,
    footerLink6,
    footerLink7
  } = footerContent;

  const getLink = (footerLink) => (
      (footerLink.linkType === 'internal' ? (
        <Link to={footerLink.linkUrl}>{footerLink.label}</Link>
      ) : (
        (footerLink.newTab ? (
          <a
            href={footerLink.linkUrl}
            target="_blank"
            rel="noreferrer noopener">{footerLink.label}</a>
        ) : (
          <a href={footerLink.linkUrl}>{footerLink.label}</a>
        ))
      ))
    )

  const { basePath } = useSiteMetadata();

  return (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href={`${basePath != '' ? basePath : '/'}`}>
                <img src={`${basePath}${footerImage.image}`} width="50" alt={footerImage.imageAlt}/>
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>{getLink(footerLink1)}</li>
              <li>{getLink(footerLink2)}</li>
              <li>{getLink(footerLink3)}</li>
              <li>{getLink(footerLink4)}</li>
              <li>{getLink(footerLink5)}</li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>{getLink(footerLink6)}</li>
              <li>{getLink(footerLink7)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)};

export default Footer;
