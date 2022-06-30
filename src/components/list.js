import React from 'react';
import { graphql, Link } from 'gatsby';

/*
  The list is not loaded by default on the main pages. To include this list you can add
  "associatedLinkList" to the applicable link list collection item in the front-matter of
  your markdown pages.
*/

const LinkList = ({ content }) => {

  const { reportItems, newsItems } = content;

  return (
    <div className="usa-prose">
      <ul>
        {console.log(content)}
        {
          (reportItems &&
          reportItems.length > 0 &&
          reportItems.reverse().map (
            (contentItem, idx) => (
              <>
                {contentItem.label !== " " && (
                  <li key={idx}>
                    <Link
                      to={'../'+contentItem.fileUrl}
                    >
                        {contentItem.label}
                    </Link>
                  </li>
                )}
              </>
            )
        )) ||
        (newsItems &&
          newsItems.length > 0 &&
          newsItems.reverse().map (
            (contentItem, idx) => (
              <>
                {contentItem.label !== " " && (
                  <li key={idx}>
                    <Link
                      to={contentItem.linkUrl}
                    >
                        {contentItem.label}
                    </Link> - {contentItem.publisher} ({contentItem.publicationDate})
                  </li>
                )}
              </>
            )
        ))}
      </ul>
    </div>
  )
};

export default LinkList;
