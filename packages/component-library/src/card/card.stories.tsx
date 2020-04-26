import React from 'react';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';

import { SimpleIcon, H3, Small, Tag, BulletLayout, Image } from '..';

import PngSampleOne from '../image/img/sample-1.png';
// import PngSampleTwo from '../image/img/sample-2';

import Card from './card.component';

export default { title: 'Card layout' };

export const CardWithoutThumbnail = () => (
  <Card onCardControlClick={() => alert('Card control was clicked!')}>
    <BulletLayout
      BulletPoint={() => (
        <SimpleIcon color="shade-400" icon={faGlobeAmericas} variant="small" />
      )}
    >
      <H3>Yellow submarine</H3>
    </BulletLayout>
    <BulletLayout
      BulletPoint={() => <Tag color="primary-300">Organisation</Tag>}
    >
      <Small>Created by John Lennon</Small>
    </BulletLayout>
  </Card>
);

export const CardWithThumbnail = () => (
  <Card onCardControlClick={() => alert('Card control was clicked!')}>
    <BulletLayout
      BulletPoint={() => <Image src={PngSampleOne} alt="A sample image" />}
    >
      <BulletLayout
        BulletPoint={() => (
          <SimpleIcon
            color="shade-400"
            icon={faGlobeAmericas}
            variant="small"
          />
        )}
      >
        <H3>Yellow submarine</H3>
      </BulletLayout>
      <BulletLayout
        BulletPoint={() => <Tag color="primary-300">Organisation</Tag>}
      >
        <Small>Created by John Lennon</Small>
      </BulletLayout>
    </BulletLayout>
  </Card>
);
