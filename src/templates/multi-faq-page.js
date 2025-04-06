import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';
import FaqCategory from '../components/faq-category';

/*
  This template is for a multi-topic FAQ page which consists of multiple categories, subcategories, and multiple question and answer pairs
*/

const MultiFaqPage = ({ data }) => {
  const { pageContent, headerContent, navigation } = data;
  const { frontmatter } = pageContent;
  const { navMenuItems } = navigation.frontmatter;

  const currPageSideNav = (pageParentName) => {
    return navMenuItems.filter(navMenuItem => navMenuItem.label === pageParentName)[0];
  };

  const categories = pageContent.frontmatter.category_group || [];

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
              className={"usa-layout-docs__main " + (frontmatter.sidenav ? "desktop:grid-col-9 " : "desktop:grid-col-12 ")  + (frontmatter.title === "Leadership" ? "profile-images" : "")}
            >
              <div className={"usa-prose"}>
                <h1 id="topOfPage">{frontmatter.title}</h1>

                {categories.map((category, index) => (
                  <FaqCategory title={category.category_name} key={index} subcategories={category.subcategory_group} />
                ))}

              <p><a href="#topOfPage">Back to Top</a></p>
              </div>
            </main>
          </div>
        </div>
      </div>
    </Layout> //</>
  );
};

export const multiFaqPageQuery = graphql`
  query($name: String!) {
    pageContent: markdownRemark(
      fields: {
        sourceName: { eq: "multi-faq-pages" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        title
        sidenav
        parent
        category_group {
          category_name
          subcategory_group {
            category_subheading
            faqQuestions {
              answer
              question
              questionid
            }
          }
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

export default MultiFaqPage;
