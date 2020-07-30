import React from 'react';

const DocContent = ({content}) => {
  return (
    <div dangerouslySetInnerHTML={{ __html: content }} />
  );
};

export default DocContent;