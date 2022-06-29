import React from 'react';
import { graphql, Link } from 'gatsby';

/*
  The list is not loaded by default on the main pages. To include this list you can add
  "associatedLinkList" to the applicable link list collection item in the front-matter of
  your markdown pages.
*/

const LinkList = ({ linkList }) => {

  // const { linkList } = linkListQuery;

  return (
    <ul>
      {linkList &&
        linkList.length > 0 &&
        linkList.map (
          (linkListItem, idx) => (
            <>
              {linkListItem.label !== " " && (
                <li key={idx}>
                  <Link
                    to={linkListItem.fileUrl}
                  >
                      {linkListItem.label}
                  </Link>
                </li>
              )}
            </>
          )
      )}
    </ul>
  )
};

// export const linkListQuery = graphql`
//     query($name: String!) {
//       linkList: markdownRemark(
//         fields: {
//           sourceName: { eq: "link-lists" }
//           name: { eq: $name }
//         }
//       ) {
//         frontmatter {
//           reportItems {
//             label
//             fileUrl
//           }
//           newsItems {
//             label
//             linkUrl
//             publicationDate
//             publisher
//           }
//           title
//         }
//       }
//     }
//   `;

export default LinkList;
