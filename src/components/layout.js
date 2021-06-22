/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';

import Banner from './banner';
import Footer from './footer';
import Header from './header';
import Nav from './nav';

const Layout = ({ children, headerTitle }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      markdownRemark(
        fields: {
          name: { eq: "navbar" }
        }
      ) {
        frontmatter {
          navMenu {
            menuItems {
              label
              linkType
              linkUrl
              subMenuItems {
                label
                linkType
                linkUrl
              }
            }
          }
        }
      }
      site {
        siteMetadata {
          title
          navigation {
            title
            items {
              text
              link
            }
          }
          secondaryLinks {
            text
            link
          }
        }
      }
    }
  `);

  // const navData = useStaticQuery(graphql`
  //   query NavItemsQuery {
      
  //   }
  // `);

  const { title, secondaryLinks } = data.site.siteMetadata;
  const { navMenu } = data.markdownRemark.frontmatter;
  const navigation = navMenu.menuItems;

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <Banner />
      <div className="usa-overlay" />
      <Header siteTitle={headerTitle}>
        <Nav {...{ navigation, secondaryLinks }} />
      </Header>
        {children}
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
