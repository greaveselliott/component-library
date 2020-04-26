import React from 'react';

import './tag.scss';

type TagProps = {
  color: 'primary-300' | 'shade-200';
  children: string;
};

const Tag: React.FC<TagProps> = ({ color, children }) => (
  <div className={`tag tag--color-${color}`}>{children}</div>
);

export default Tag;
