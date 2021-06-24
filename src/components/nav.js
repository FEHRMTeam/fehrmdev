import { Link } from 'gatsby';
import React from 'react';

import close from '../../node_modules/uswds/dist/img/close.svg';
import SearchForm from './search-form';

const Nav = ({ navMenuItems, secondaryLinks }) => (
  <nav role="navigation" className="usa-nav">
    <div className="usa-nav__inner">
      <button className="usa-nav__close">
        <img src={close} alt="close" />
      </button>
      <ul className="usa-accordion usa-nav__primary">
        {navMenuItems.map((navGroup, idx) => {
        return (
          <li key={idx} className="usa-nav__primary-item">
            {navGroup.subMenuItems && navGroup.subMenuItems.length > 1 ? (
              <>
                <button
                  className={`usa-accordion__button usa-nav__link ${
                    idx === 0 ? 'usa-current' : ''
                  }`}
                  aria-controls={`extended-nav-section-${idx}`}
                  aria-expanded={false}
                >
                  <span>{navGroup.label}</span>
                </button>
                <ul
                  id={`extended-nav-section-${idx}`}
                  className="usa-accordion__content usa-nav__submenu"
                  hidden
                >
                  {navGroup.subMenuItems.map((navItem, idx) => (
                    <li key={idx} className="usa-nav__submenu-item">
                      <Link to={navItem.linkUrl}>{navItem.label}</Link>
                    </li>
                  ))}
                </ul>
              </>
            ) : (
              <Link
                className="usa-nav__link"
                activeClassName="usa-current"
                to={navGroup.linkUrl}
              >
                <span>{navGroup.label}</span>
              </Link>
            )}
          </li>
        )})}
      </ul>
      <div className="usa-nav__secondary">
        <ul className="usa-nav__secondary-links">
          {secondaryLinks.map((secondaryLink, idx) => (
            <li key={idx} className="usa-nav__secondary-item">
              <Link to={secondaryLink.link}>{secondaryLink.text}</Link>
            </li>
          ))}
        </ul>
        <SearchForm />
      </div>
    </div>
  </nav>
);

export default Nav;
