import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';
import LinkList from '../components/list.js';
import ReportItem from '../components/reportItem.js';
import NewsItem from '../components/newsItem.js';

/*
  This template is for a single page that does not have a date associated with it. For example, an about page.
*/

const ListPage = ({ data }) => {
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
              className={"usa-layout-docs__main desktop:grid-col-9 " + (frontmatter.title === "Leadership" ? "profile-images" : "")}
            >
              <div className={"usa-prose"} dangerouslySetInnerHTML={{ __html: html }} />
              {(frontmatter.reportItems ? <LinkList content={frontmatter.reportItems} ListItemType={ReportItem} /> : "")}
              {(frontmatter.newsItems ? <LinkList content={frontmatter.newsItems} ListItemType={NewsItem} /> : "" )}
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const listPageQuery = graphql`
  query($name: String!) {
    pageContent: markdownRemark(
      fields: {
        sourceName: { eq: "list-pages" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        title
        sidenav
        parent
        reportItems {
          label
          fileUrl
        }
        newsItems {
          label
          linkUrl
          publicationDate
          publisher
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

export default ListPage;
