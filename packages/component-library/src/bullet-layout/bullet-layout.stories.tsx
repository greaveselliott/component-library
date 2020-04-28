import React from 'react';
import {
  faHome,
  faExclamationCircle,
  faGlobeAmericas,
} from '@fortawesome/free-solid-svg-icons';

import BulletLayout from './bullet-layout.component';
import { SimpleIcon, H3, Small, Tag, Paragraph, Checkbox, Label } from '..';

export default { title: 'Bullet layout' };

export const NavigationLink = () => (
  <BulletLayout
    BulletPoint={() => (
      <SimpleIcon color="shade-400" icon={faHome} variant="large" />
    )}
  >
    <Paragraph>Dashboard</Paragraph>
  </BulletLayout>
);

export const FilterOption = () => (
  <BulletLayout
    BulletPoint={() => (
      <Checkbox id="filter-option-1" name="filters" value="true" />
    )}
  >
    <BulletLayout
      BulletPoint={() => (
        <SimpleIcon
          color="shade-400"
          icon={faExclamationCircle}
          variant="small"
        />
      )}
    >
      <Label htmlFor="filter-option-1">Alerting</Label>
    </BulletLayout>
  </BulletLayout>
);

export const CardHeading = () => (
  <BulletLayout
    BulletPoint={() => (
      <SimpleIcon color="shade-400" icon={faGlobeAmericas} variant="small" />
    )}
  >
    <H3>Yellow submarine</H3>
  </BulletLayout>
);

export const TaggedDescription = () => (
  <BulletLayout BulletPoint={() => <Tag color="primary-300">Organisation</Tag>}>
    <Small>Created by John Lennon</Small>
  </BulletLayout>
);
