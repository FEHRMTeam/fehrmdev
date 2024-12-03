import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Sidenav from '../components/sidenav';
import Button from '../components/button';

/*
  This template is for the main FAQ page which links to the topic pages maintained in the CMS
*/

const FaqMainPage = ({ data }) => {
  const { faqsContent, headerContent, navigation } = data;
  const { navMenuItems } = navigation.frontmatter;

  const currPageSideNav = (pageParentName) => {
    return navMenuItems.filter(navMenuItem => navMenuItem.label === pageParentName)[0];
  };

  const faqs = faqsContent.edges.map(({ node }) => ({
    html: node.html,
    ...node.frontmatter,
    path: '/' + node.fields.name
  }));

  return(
    <Layout>
      <SEO title="Frequently Asked Questions" />
      <div className="usa-layout-docs usa-section">
        <div className="grid-container">
          <div className="grid-row grid-gap">
            <Sidenav content={currPageSideNav("About")} currentPage="Frequently Asked Questions" />
            <main id="main-content" className="usa-layout-docs__main desktop:grid-col-9">
                <div className={"usa-prose"}>
                    <h1>Frequently Asked Questions</h1>
                    <section className="grid-container usa-section padding-bottom-0 padding-top-0">
                        <ul className="usa-card-group flex-align-center flex-align-stretch">
                        {faqs.map(faq => (
                            <Button heading={faq.category} url={faq.path} key={faq.category} />
                        ))} 
                        </ul>
                    </section>
                </div>
            </main>
           </div>
        </div>
      </div>
    </Layout>
  );
};

export const faqQuery = graphql`
    query {
      faqsContent: allMarkdownRemark(
        filter: {fields: {sourceName: {eq: "faq-pages"}}}
        sort: {frontmatter: {sortOrder: ASC}}
      ) {
        edges {
            node {
                frontmatter {
                    category
                }
                fields {
                    name
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

export default FaqMainPage;