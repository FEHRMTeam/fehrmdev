import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';

/*
  This template is for a single page that does not have a date associated with it. For example, an about page.
*/

const DocumentationPage = ({ data }) => {
  const { pageContent, headerContent, navigation } = data;
  const { frontmatter, html } = pageContent;
  const { navMenuItems } = navigation.frontmatter;

  const currPageSideNav = (pageParentName) => {
    return navMenuItems.filter(navMenuItem => navMenuItem.label === pageParentName)[0];
  };

  return (
    <Layout
      headerTitle={headerContent.frontmatter.headerTitle}>
      <SEO title={frontmatter.title} />
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {frontmatter.sidenav &&
              <Sidenav
                content={currPageSideNav(frontmatter.parent)}
                currentPage={frontmatter.title} />}

            <main id="main-content"
              className={"usa-layout-docs__main desktop:grid-col-9 usa-prose " + (frontmatter.title === "Leadership" ? "profile-images" : "")}
              dangerouslySetInnerHTML={{ __html: html }}>
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const pageQuery = graphql`
  query($name: String!) {
    pageContent: markdownRemark(
      fields: {
        sourceName: { eq: "content-pages" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        title
        sidenav
        parent
        associatedLinkList
      }
    }
    headerContent: markdownRemark(
      fields: {
        sourceName: { eq: "homepage" }
      }
    ) {
      frontmatter {
        headerTitle
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
          subMenuItems {
            label
            linkType
            linkUrl
            newTab
          }
        }          
      }
    }
  }
`;

export default DocumentationPage;
