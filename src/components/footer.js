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

  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  const devPath = '/site/fehrmteam/fehrmdev';

  const getImage = (footerImage) => (
    (pathname.indexOf(devPath) > -1 ?
      (<img src={devPath + footerImage.image} width="50" alt={footerImage.imageAlt}/>) :
      (<img src={footerImage.image} width="50" alt={footerImage.imageAlt}/>)
    )

  )

  return (
  <footer className="usa-footer site-footer" role="contentinfo">
    <div className="footer-section-bottom bg-base-lighter">
      <div className="grid-container">
        <div className="grid-row padding-3">
          <div className="tablet:grid-col">
            <div className="logo-links">
              <a className="footer-logo media_link" href="/">
                {getImage(footerImage)}
              </a>
            </div>
          </div>
          <div className="tablet:grid-col"></div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>{getLink(footerLink1)}</li>
              <li>{getLink(footerLink2)}</li>
              <li>{getLink(footerLink3)}</li>
            </ul>
          </div>
          <div className="tablet:grid-col">
            <ul className="add-list-reset">
              <li>{getLink(footerLink4)}</li>
              <li>{getLink(footerLink5)}</li>
              <li>{getLink(footerLink6)}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </footer>
)};

export default Footer;
