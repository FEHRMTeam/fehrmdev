import React from 'react';

/*
  This component is loaded by LinkList if there is any data available. To include data you can add
  items to the "newsItems" list in the applicable list pages collection item in the front-matter of
  your markdown pages.
*/

const NewsItem = ({ item }) => {
  return (
    <li>
      <a
        href={item.linkUrl}
      >
        {item.label}
      </a> &#8211; {item.publisher} ({item.publicationDate})
    </li>
  )
};

export default NewsItem;
