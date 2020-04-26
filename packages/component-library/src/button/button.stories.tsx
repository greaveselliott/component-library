import React from 'react';
import Button from './button.component.tsx';

export default { title: 'Button' };

export const Pill = () => (
  <>
    <Button>Primary Button</Button>
    <Button disabled>Disabled Button</Button>
  </>
);
