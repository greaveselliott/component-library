import React from 'react';
import Tag from './tag.component';

export default { title: 'Tag' };

export const Pill = () => (
  <>
    <Tag color="primary-300">Primary 300 tag</Tag>
    <Tag color="shade-200">Shade 200 tag</Tag>
  </>
);
