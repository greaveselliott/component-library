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
    fantasy swashbuckler film directed by Gore Verbinski and the first film in
    the Pirates of the Caribbean film series. Produced by Walt Disney Pictures
    and Jerry Bruckheimer, the film is based on Walt Disney's Pirates of the
    Caribbean attraction at Disney theme parks.[3] The story follows pirate Jack
    Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as they
    rescue the kidnapped Elizabeth Swann (Keira Knightley) from the cursed crew
    of the Black Pearl, captained by Hector Barbossa (Geoffrey Rush), who become
    undead skeletons at night.
  </Paragraph>
);

export const BodySmall = (): React.ReactNode => <Small>A small caption</Small>;
