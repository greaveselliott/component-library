import React from 'react';
import Button from './button.component.tsx';

export default { title: 'Button' };

export const Pill = () => (
  <>
    <Button>Primary Button</Button>
    <Button disabled>Disabled Button</Button>
    <Button variant="secondary">Secondary Button</Button>
    <Button variant="negative">Negative Button</Button>
  </>
);

export const SmallRound = () => (
  <>
    <Button shape="round" size="small" />
    <Button shape="round" size="small" disabled />
    <Button shape="round" size="small" variant="secondary" />
    <Button shape="round" size="small" variant="negative" />
  </>
);

export const MediumRound = () => (
  <>
    <Button shape="round" size="medium" />
    <Button shape="round" size="medium" disabled />
    <Button shape="round" size="medium" variant="secondary" />
    <Button shape="round" size="medium" variant="negative" />
  </>
);

export const LargeRound = () => (
  <>
    <Button shape="round" size="large" />
    <Button shape="round" size="large" disabled />
    <Button shape="round" size="large" variant="secondary" />
    <Button shape="round" size="large" variant="negative" />
  </>
);

export const Link = () => (
  <>
    <Button href="#">Primary Button</Button>
    <Button href="#" disabled>
      Disabled Button
    </Button>
    <Button href="#" variant="secondary">
      Secondary Button
    </Button>
    <Button href="#" variant="negative">
      Negative Button
    </Button>
    <Button href="#" shape="round" size="small" />
    <Button href="#" shape="round" size="small" disabled />
    <Button href="#" shape="round" size="small" variant="secondary" />
    <Button href="#" shape="round" size="small" variant="negative" />
    <Button href="#" shape="round" size="medium" />
    <Button href="#" shape="round" size="medium" disabled />
    <Button href="#" shape="round" size="medium" variant="secondary" />
    <Button href="#" shape="round" size="medium" variant="negative" />
    <Button href="#" shape="round" size="large" />
    <Button href="#" shape="round" size="large" disabled />
    <Button href="#" shape="round" size="large" variant="secondary" />
    <Button href="#" shape="round" size="large" variant="negative" />
  </>
);
