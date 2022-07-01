import React from 'react';

/*
  This component is loaded by LinkList if there is any data available. To include data you can add
  items to the "reportItems" list in the applicable list pages collection item in the front-matter of
  your markdown pages.
*/

const ReportItem = ({ item }) => {
  return (
    <li>
      <a
        href={item.fileUrl}
      >
        {item.label}
      </a>
    </li>
  )
};

export default ReportItem;
