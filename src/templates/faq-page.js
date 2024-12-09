import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';
import Faqs from '../components/faqs';
import useSiteMetadata from '../hooks/use-site-metadata';

/*
  This template is for a single FAQ page which consists of a category and multiple question and answer pairs
*/

const FaqPage = ({ data }) => {
  const { pageContent, headerContent, navigation } = data;
  const { frontmatter, html } = pageContent;
  const { navMenuItems } = navigation.frontmatter;
  const { basePath } = useSiteMetadata();

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
              className={"usa-layout-docs__main desktop:grid-col-9 " + (frontmatter.title === "Leadership" ? "profile-images" : "")}
            >
              <div className={"usa-prose"}>
                <h1 id="topOfPage">Frequently Asked Questions</h1>
                <h2 className="margin-top-0 padding-top-2 padding-bottom-2">{frontmatter.category}</h2>
                <Faqs content={frontmatter.faqQuestions} />
                <p><a href="#topOfPage">Back to Top</a> | <a href={`${basePath}/faq`}>Return to Frequently Asked Questions</a></p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout> //</>
  );
};

export const faqPageQuery = graphql`
  query($name: String!) {
    pageContent: markdownRemark(
      fields: {
        sourceName: { eq: "faq-pages" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        title
        sidenav
        parent
        category
        sortOrder
        faqQuestions{
          question
          answer
          questionid
        }
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

export default FaqPage;
