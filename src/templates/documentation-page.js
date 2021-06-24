import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';

/*
  This template is for a single page that does not have a date associated with it. For example, an about page.
*/

const DocumentationPage = ({ data }) => {
  const { pageContent, headerContent } = data;
  const { frontmatter, html } = pageContent;

  return (
    <Layout
      headerTitle={headerContent.frontmatter.headerTitle}
      secondaryLinks={headerContent.frontmatter.secondaryLinks}>
      <SEO title={frontmatter.title} />
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            {frontmatter.sidenav && <Sidenav />}

            <main id="main-content" className="usa-layout-docs__main desktop:grid-col-9 usa-prose"
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
      }
    }
    headerContent: markdownRemark(
      fields: {
        sourceName: { eq: "homepage" }
      }
    ) {
      frontmatter {
        headerTitle
        secondaryLinks {
          label
          linkUrl
        }
      }
    }
  }
`;

export default DocumentationPage;
