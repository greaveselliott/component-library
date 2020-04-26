import React from 'react';

import './tag.scss';

export type TagColors = 'primary-300' | 'shade-200';

type TagProps = {
  color: TagColors;
  children: string;
};

const Tag: React.FC<TagProps> = ({ color, children }) => (
  <div className={`tag tag--color-${color}`}>{children}</div>
);

export default Tag;
