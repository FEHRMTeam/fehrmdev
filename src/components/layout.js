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
      title: site {
        siteMetadata {
          title
        }
      }
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
            newTab
            sideNavOnly
            subMenuItems {
              label
              linkType
              linkUrl
              newTab
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
            linkType
            newTab
          }
          footerLink2 {
            label
            linkUrl
            linkType
            newTab
          }
          footerLink3 {
            label
            linkUrl
            linkType
            newTab
          }
          footerLink4 {
            label
            linkUrl
            linkType
            newTab
          }
          footerLink5 {
            label
            linkUrl
            linkType
            newTab
          }
          footerLink6 {
            label
            linkUrl
            linkType
            newTab
          }
        }
      }
    }
  `);
 
  const { title, navigation, footer } = data;
  const { navMenuItems } = navigation.frontmatter;

  return (
    <>
      <a className="usa-skipnav" href="#main-content">
        Skip to main content
      </a>
      <Banner />
      <div className="usa-overlay" />
      <Header siteTitle={title.siteMetadata.title}>
        <Nav {...{ navMenuItems }} />
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
