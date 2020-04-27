import React from 'react';
import { faExclamationCircle } from '@fortawesome/free-solid-svg-icons';

import { SimpleIcon, Checkbox, Label, BulletLayout } from '..';

import Accordion from './accordian.component';

export default { title: 'Accordion layout' };

const ExampleFilterOption = ({ label }: { label: string }) => (
  <BulletLayout
    BulletPoint={() => <Checkbox id={label} name="filters" value="true" />}
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
      <Label htmlFor={label}>{label}</Label>
    </BulletLayout>
  </BulletLayout>
);

export const FilterCategory = () => (
  <Accordion title="Filter group">
    <ExampleFilterOption label="Filter one" />
    <ExampleFilterOption label="Filter two" />
    <ExampleFilterOption label="Filter three" />
    <ExampleFilterOption label="Filter four" />
  </Accordion>
);
