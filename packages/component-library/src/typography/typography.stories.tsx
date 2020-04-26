import React from 'react';

import H1 from './h1/h1.component';
import H2 from './h2/h2.component';
import H3 from './h3/h3.component';
import Paragraph from './paragraph/paragraph.component';
import Small from './small/small.component';

export default { title: 'Typography' };

export const Headings = (): React.ReactNode => (
  <>
    <H1>Heading one</H1>
    <H2>Heading two</H2>
    <H3>Heading three</H3>
  </>
);

export const Body = (): React.ReactNode => (
  <Paragraph>
    Pirates of the Caribbean: The Curse of the Black Pearl is a 2003 American
  </Paragraph>
);

export const BodySmall = (): React.ReactNode => <Small>A small caption</Small>;
