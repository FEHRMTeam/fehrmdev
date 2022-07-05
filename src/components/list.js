import React from 'react';

/*
  The list component is loaded on the applicable link page collection item if there is 
  list data available in the front-matter of your markdown pages.
*/

const LinkList = ({ content, ListItemType }) => {

  return (
    <div className="usa-prose">
      <ul>
        {
          (content &&
          content.length > 0 &&
          content.map (
            (contentItem) => (
              <React.Fragment key={contentItem.label.toString()}>
                {contentItem.label !== " " && (
                  <ListItemType key={contentItem.label.toString()} item={contentItem} />
                )}
              </React.Fragment>
            )
          ))
        }
      </ul>
    </div>
  )
};

export default LinkList;
