import React from 'react';
import { graphql } from 'gatsby';

import Layout from '../components/layout';
import SEO from '../components/seo';
import Hero from '../components/hero';
import Tagline from '../components/tagline';
import Highlights from '../components/highlights';

/*
  This template is for the home page and allowing content creators to manage it from the CMS
*/

const IndexPage = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;

  return(
    <Layout
      headerTitle={frontmatter.headerTitle}>
      <SEO title={frontmatter.title} />
      {/* <Hero heroCallout={frontmatter.heroCallout} /> */}
      <Hero />
      <Tagline taglineContent={frontmatter.tagline} />
      <Highlights callToActions={frontmatter.callToActions} />
    </Layout>
  );
};

export const indexQuery = graphql`
  query {
    markdownRemark(
      fields: {
        sourceName: { eq: "homepage" }
      }
    ) {
      html
      frontmatter {
        title
        headerTitle
        heroImage {
          image
          imageAlt
        }
        heroCarousel {
          initialDelay
          transition
          duration
          heroCarouselImages {
            image
            imageAlt
          }
        }
        tagline {
          taglineHeadingText
          taglineDescription
        }
        callToActions {
          topLeftCTA {
            heading
            subHeading
            CTAImage {
              image
              imageAlt
            }
          }
          topRightCTA {
            heading
            subHeading
            CTAImage {
              image
              imageAlt
            }
          }
          bottomLeftCTA {
            heading
            subHeading
            CTAImage {
              image
              imageAlt
            }
          }
          bottomRightCTA {
            heading
            subHeading
            CTAImage {
              image
              imageAlt
            }
          }
        }
      }
    }
  }
`

export default IndexPage;