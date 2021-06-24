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

const Layout = ({ children, headerTitle, secondaryLinks }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      navigation: markdownRemark(
        fields: {
          name: { eq: "navbar" }
        }
      ) {
        frontmatter {
          navMenuItems {
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
      footer: markdownRemark(
        fields: {
          name: { eq: "footer" }
        }
      ) {
        frontmatter {
          footerImage {
            image
            imageAlt
          }
          footerLink1 {
            label
            linkUrl
          }
          footerLink2 {
            label
            linkUrl
          }
          footerLink3 {
            label
            linkUrl
          }
          footerLink4 {
            label
            linkUrl
          }
          footerLink5 {
            label
            linkUrl
          }
          footerLink6 {
            label
            linkUrl
          }
        }
      }
    }
  `);
 
  const { navigation, footer } = data;
  const { navMenuItems } = navigation.frontmatter;

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <Banner />
      <div className="usa-overlay" />
      <Header siteTitle={headerTitle}>
        <Nav {...{ navMenuItems, secondaryLinks }} />
      </Header>
        {children}
      <Footer footerContent={footer.frontmatter} />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
