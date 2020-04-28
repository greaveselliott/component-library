import React from 'react';
import {
  faExclamationCircle,
  faStopCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

export default { title: 'Filter' };

import Filter from './filter.component';

export const GroupOfFilters = () => (
  <>
    <Filter icon={faExclamationCircle} color="shade-400" name="FilterOne" />
    <Filter icon={faPlayCircle} color="accent-300" name="FilterTwo" />
    <Filter icon={faStopCircle} color="accent-400" name="FilterThree" />
  </>
);
