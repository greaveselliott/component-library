import React from 'react';

import { Checkbox, BulletLayout, SimpleIcon, Label } from '..';

// Todo: consolidate types
import { SimpleIconProps } from '../simple-icon/simple-icon.component';

interface FilterProps extends SimpleIconProps {
  name: string;
}

const Filter: React.FC<FilterProps> = ({
  color = 'accent-200',
  icon,
  name,
  variant = 'small',
}: FilterProps) => (
  <BulletLayout
    BulletPoint={() => (
      <Checkbox id={`filter-${name}`} name={`filter-${name}`} value="true" />
    )}
  >
    <BulletLayout
      BulletPoint={() => (
        <SimpleIcon color={color} icon={icon} variant={variant} />
      )}
    >
      <Label htmlFor={`filter-${name}`}>Alerting</Label>
    </BulletLayout>
  </BulletLayout>
);

export default Filter;
