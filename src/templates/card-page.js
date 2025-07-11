import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';
import CardsInternal from '../components/cards-internal';
import MarkdownContent from '../components/markdown';

/*
  This template is for top level navigation landing pages and allowing content creators to manage it from the CMS
*/

const CardPage = ({ data }) => {
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
                className={"usa-layout-docs__main desktop:grid-col-12 " + (frontmatter.title === "Leadership" ? "profile-images" : "")}
              >
                <div className={"usa-prose"}>
                  <h1 dangerouslySetInnerHTML={{ __html: frontmatter.title }} /> 
                  <MarkdownContent content={frontmatter.intro} />
                </div> 
                <CardsInternal cardsContent={frontmatter.highlightCards} />
                <div className={"usa-prose fullwidth"} dangerouslySetInnerHTML={{ __html: html }} />
              </main>
            </div>
          </div>
        </div>
      </Layout>
    );
  };
  
  export const cardPageQuery = graphql`
    query($name: String!) {
      pageContent: markdownRemark(
        fields: {
          sourceName: { eq: "card-pages" }
          name: { eq: $name }
        }
      ) {
        html
        frontmatter {
          title
          sidenav
          parent
          intro
          highlightCards {
            description
            heading
            button {
              text
              url
            }
            cardImage {
              image
              alt
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
  
  export default CardPage;