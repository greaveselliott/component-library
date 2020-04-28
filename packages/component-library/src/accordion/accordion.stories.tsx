import React from 'react';
import {
  faExclamationCircle,
  faStopCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

import { Filter } from '..';

import Accordion from './accordian.component';

export default { title: 'Accordion layout' };

export const FilterCategory = () => (
  <>
    <Accordion title="Filter group 1">
      <Filter icon={faExclamationCircle} color="shade-400" name="filter-1" />
      <Filter icon={faPlayCircle} color="accent-300" name="filter-2" />
      <Filter icon={faStopCircle} color="accent-400" name="filter-3" />
    </Accordion>
    <Accordion title="Filter group 2">
      <Filter icon={faExclamationCircle} color="shade-400" name="Filter-4" />
      <Filter icon={faPlayCircle} color="accent-300" name="Filter-5" />
      <Filter icon={faStopCircle} color="accent-400" name="Filter-6" />
    </Accordion>
    <Accordion title="Filter group 3">
      <Filter icon={faExclamationCircle} color="shade-400" name="filter-7" />
      <Filter icon={faPlayCircle} color="accent-300" name="filter-8" />
      <Filter icon={faStopCircle} color="accent-400" name="filter-9" />
    </Accordion>
  </>
);
