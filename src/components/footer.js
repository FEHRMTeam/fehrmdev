import React from 'react';
import { Link } from 'gatsby';

const Footer = ({ footerContent }) => { 
  const {
    footerImage,
    footerLink1,
    footerLink2,
    footerLink3,
    footerLink4,
    footerLink5,
    footerLink6
  } = footerContent;

  return (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="https://18f.gsa.gov">
                <img src={footerImage.image} width="50" alt={footerImage.imageAlt}/>
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li><Link to={footerLink1.linkUrl}>{footerLink1.label}</Link></li>
              <li><Link to={footerLink2.linkUrl}>{footerLink2.label}</Link></li>
              <li><Link to={footerLink3.linkUrl}>{footerLink3.label}</Link></li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li><Link to={footerLink4.linkUrl}>{footerLink4.label}</Link></li>
              <li><Link to={footerLink5.linkUrl}>{footerLink5.label}</Link></li>
              <li><Link to={footerLink6.linkUrl}>{footerLink6.label}</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)};

export default Footer;
