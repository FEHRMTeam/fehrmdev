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

const Index = ({ data }) => {
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
console.log("here")
  return(
    <Layout>
      <SEO title={frontmatter.title} />
      <Hero />
      hello there
    </Layout>
  );
};

// export const indexQuery = graphql`
//   query IndexPage {
//     markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
//       frontmatter {
//         title
//       }
//     }`;
export const indexQuery = graphql`
  query IndexPage {
    markdownRemark(frontmatter: { templateKey: { eq: "home-page" } }) {
      frontmatter {
        title
      }
    }
  }
`
      //   fields: {
    //     sourceName: { eq: "homepage" }
    //     name: { eq: $name }
    //   }
    // ) {
    //   html
    //   frontmatter {
    //     title
    //   }
    // }
  // }`;

export default Index;