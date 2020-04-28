import React from 'react';

import Image from './image.component';

import pngSampleOne from './img/sample-1.png';
import pngSampleTwo from './img/sample-2.png';
import pngSampleThree from './img/sample-3.png';

export default { title: 'Image' };

export const Images = () => (
  <>
    <Image src={pngSampleOne} alt="A helpful description." />
    <Image src={pngSampleTwo} alt="A helpful description." />
    <Image src={pngSampleThree} alt="A helpful description." isRound />
  </>
);
