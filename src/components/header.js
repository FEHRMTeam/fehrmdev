import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import useSiteMetadata from '../hooks/use-site-metadata';

const Header = ({ children, siteTitle = `` }) => {

  const { basePath } = useSiteMetadata();

  return (
  <header className="usa-header usa-header--extended" role="banner">
    <div className="usa-navbar">
      <div className="usa-logo" id="extended-logo">
        <em className="usa-logo__text">
          <Link to="/" title="Home" aria-label="Home">
            <img src={`${basePath}/images/FEHRMHBDLogo_White.png`} alt={siteTitle} className="header-logo"/>
          </Link>
        </em>
      </div>
      <button className="usa-menu-btn">Menu</button>
    </div>
    {children}
  </header>
)};

Header.propTypes = {
  siteTitle: PropTypes.string,
};

export default Header;
