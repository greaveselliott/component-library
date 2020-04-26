import React from 'react';

import H1 from './h1/h1.component.tsx';
import H2 from './h2/h2.component.tsx';
import H3 from './h3/h3.component.tsx';
import H4 from './h4/h4.component.tsx';
import H5 from './h5/h5.component.tsx';
import H6 from './h6/h6.component.tsx';
import Paragraph from './paragraph/paragraph.component.tsx';

export default { title: 'Typography' };

export const Headings = () => (
  <>
    <H1>Heading one</H1>
    <H2>Heading two</H2>
    <H3>Heading three</H3>
    <H4>Heading four</H4>
    <H5>Heading five</H5>
    <H6>Heading six</H6>
  </>
);

export const Body = () => (
  <>
    <Paragraph>
      Pirates of the Caribbean: The Curse of the Black Pearl is a 2003 American
      fantasy swashbuckler film directed by Gore Verbinski and the first film in
      the Pirates of the Caribbean film series. Produced by Walt Disney Pictures
      and Jerry Bruckheimer, the film is based on Walt Disney's Pirates of the
      Caribbean attraction at Disney theme parks.[3] The story follows pirate
      Jack Sparrow (Johnny Depp) and blacksmith Will Turner (Orlando Bloom) as
      they rescue the kidnapped Elizabeth Swann (Keira Knightley) from the
      cursed crew of the Black Pearl, captained by Hector Barbossa (Geoffrey
      Rush), who become undead skeletons at night.
    </Paragraph>
    <Paragraph>
      Jay Wolpert developed a script in 2001, and Stuart Beattie rewrote it in
      early 2002. Around that time, producer Jerry Bruckheimer became involved
      in the project; he had Ted Elliott and Terry Rossio work on the script,
      adding the plot device of a supernatural curse to the story to bring it in
      line with the original theme park ride. Filming took place from October
      2002 to March 2003 in Saint Vincent and the Grenadines and on sets
      constructed around Los Angeles, California. It was also significant in
      being the first film released under the Walt Disney Pictures banner to be
      rated PG-13 by the MPAA.
    </Paragraph>
    <Paragraph>
      The film's world premiere was held at Disneyland Park in Anaheim,
      California on June 28, 2003. Despite low expectations, the film was a huge
      box office success, grossed $654.3 million worldwide; making it the fourth
      highest-grossing film of 2003. It received generally positive reviews from
      critics; the film was praised for the performances (particularly from
      Depp), action sequences, writing, score, and visuals. The film has been
      widely seen as the film that launched Depp as a box office leading man
      after many years as a cult movie star. Depp won the Screen Actors Guild
      Award for Outstanding Performance by a Male Actor in a Leading Role, in
      addition to Best Actor nominations at the Academy Awards, BAFTAs, and
      Golden Globes. The Curse of the Black Pearl was also nominated for four
      other Academy Awards and BAFTAs. The film became the first in a franchise,
      with two back-to-back sequels, Dead Man's Chest and At World's End,
      released in 2006 and 2007. Two more sequels, On Stranger Tides and Dead
      Men Tell No Tales, were released in 2011 and 2017 respectively.
    </Paragraph>
  </>
);
