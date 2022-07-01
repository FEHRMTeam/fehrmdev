import React from 'react';
import { Link } from 'gatsby';

/*
  The sidenav is not loaded by default on the main pages. To include this navigation you can
  add "sidenav: true" in the front-matter of your markdown pages
*/

const Sidenav = ({ content, currentPage }) => (
  <aside className="usa-layout-docs-sidenav desktop:grid-col-3 padding-bottom-4">
    <nav>
      <ul className="usa-sidenav">
        <li className="usa-sidenav__item">
          <div className="sidenav-parent">{content.label}</div>
          <ul className="usa-sidenav__sublist">
            {content.subMenuItems &&
              content.subMenuItems.length > 0 &&
              content.subMenuItems.map (
                (subMenuItem, idx) => (
                  <React.Fragment key={subMenuItem.label + idx}>
                    {subMenuItem.label !== " " && (
                      <li className="usa-sidenav__item" key={subMenuItem.label + idx}>
                        <Link
                          to={subMenuItem.linkUrl}
                          className={subMenuItem.label === currentPage ? "usa-current" : ""}>
                            {subMenuItem.label}
                        </Link>
                      </li>
                    )}
                  </React.Fragment>
                )
              )}
          </ul>
        </li>
      </ul>
    </nav>
  </aside>
);

export default Sidenav;
