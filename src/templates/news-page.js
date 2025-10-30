import React, { useState } from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';
import NewsItem from '../components/newsItem.js';

/*
  This template is for a news page that displays news items by year in associated accordions in descending chronological order.
*/

const NewsPage = ({ data }) => {
  const { pageContent, headerContent, navigation } = data;
  const { frontmatter, html } = pageContent;
  const { navMenuItems } = navigation.frontmatter;

  const currPageSideNav = (pageParentName) => {
    return navMenuItems.filter(navMenuItem => navMenuItem.label === pageParentName)[0];
  };

  // Group news items by year and sort in descending order
  const groupNewsByYear = (newsItems) => {
    if (!newsItems || newsItems.length === 0) return {};

    const grouped = newsItems.reduce((acc, item) => {
      const year = new Date(item.publicationDate).getFullYear();
      if (!acc[year]) {
        acc[year] = [];
      }
      acc[year].push(item);
      return acc;
    }, {});

    // Sort items within each year by date (newest first)
    Object.keys(grouped).forEach(year => {
      grouped[year].sort((a, b) => new Date(b.publicationDate) - new Date(a.publicationDate));
    });

    return grouped;
  };

  const newsItemsByYear = groupNewsByYear(frontmatter.newsItems);
  const sortedYears = Object.keys(newsItemsByYear).sort((a, b) => b - a); // Descending order
  
  // State to manage which year accordions are expanded
  const [expandedYears, setExpandedYears] = useState(() => {
    // Initialize with only the first (most recent) year expanded
    const initialState = {};
    sortedYears.forEach((year, index) => {
      initialState[year] = index === 0; // Only first year is expanded
    });
    return initialState;
  });

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
              className="usa-layout-docs__main desktop:grid-col-9"
            >
              <div className="usa-prose" dangerouslySetInnerHTML={{ __html: html }} />
              
              {frontmatter.newsItems && frontmatter.newsItems.length > 0 && (
                <div className="usa-accordion usa-accordion--bordered" data-allow-multiple style={{ marginTop: '2rem' }}>
                  {sortedYears.map(year => {
                    const isExpanded = expandedYears[year];
                    const contentId = `news-year-${year}`;
                    
                    return (
                      <div key={year}>
                        <h2 className="usa-accordion__heading" style={{ marginTop: '0.5rem' }}>
                          <button 
                            type="button" 
                            className="usa-accordion__button" 
                            aria-expanded={isExpanded} 
                            aria-controls={contentId}
                          >
                            {year}
                          </button>
                        </h2>
                        <div 
                          id={contentId} 
                          className="usa-accordion__content usa-prose" 
                          hidden={!isExpanded}
                        >
                          <ul>
                            {newsItemsByYear[year].map(item => (
                              <NewsItem key={`${item.label}-${item.publicationDate}`} item={item} />
                            ))}
                          </ul>
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}
            </main>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const newsPageQuery = graphql`
  query($name: String!) {
    pageContent: markdownRemark(
      fields: {
        sourceName: { eq: "news-pages" }
        name: { eq: $name }
      }
    ) {
      html
      frontmatter {
        title
        sidenav
        parent
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

export default NewsPage;