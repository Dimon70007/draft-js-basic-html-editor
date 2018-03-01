import React from 'react';

const Link = (props) => {
  const {url} = props.contentState.getEntity(props.entityKey).getData();
  return (
    <a href={url} rel='noreferrer noopener' target='_self' className="drafjs-bhe_link">
      {props.children}
    </a>
  );
};

export default Link;
