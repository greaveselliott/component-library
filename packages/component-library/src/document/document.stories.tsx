import React from 'react';
import {
  faLock,
  faExclamationCircle,
  faStopCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

import { Sidebar, Accordion, Filter, Results } from '..';
import { Result } from 'results/results.component';

import Document from './document.component';

export default { title: 'Document' };

const mockResultsData: Result[] = [
  {
    title: 'Yellow submarine',
    icon: faExclamationCircle,
    iconColor: 'shade-400',
    caption: 'Created by me',
    tag: 'Personal',
    tagColor: 'shade-200',
  },
  {
    title: 'Yellow submarine',
    icon: faStopCircle,
    iconColor: 'accent-400',
    caption: 'Created by me',
    tag: 'Personal',
    tagColor: 'shade-200',
  },
  {
    title: 'Yellow submarine',
    icon: faPlayCircle,
    iconColor: 'accent-300',
    caption: 'Created by me',
    tag: 'Personal',
    tagColor: 'primary-300',
  },
];

export const DashboardDocument = () => (
  <Document title="Workflows">
    <Sidebar>
      <div>
        <Accordion title="Filter group 1">
          <Filter icon={faLock} color="shade-400" name="filter-1" />
          <Filter icon={faPlayCircle} color="accent-300" name="filter-2" />
          <Filter icon={faStopCircle} color="accent-400" name="filter-3" />
        </Accordion>
        <Accordion title="Filter group 2">
          <Filter icon={faLock} color="shade-400" name="Filter-4" />
          <Filter icon={faPlayCircle} color="accent-300" name="Filter-5" />
          <Filter icon={faStopCircle} color="accent-400" name="Filter-6" />
        </Accordion>
        <Accordion title="Filter group 3">
          <Filter icon={faLock} color="shade-400" name="filter-7" />
          <Filter icon={faPlayCircle} color="accent-300" name="filter-8" />
          <Filter icon={faStopCircle} color="accent-400" name="filter-9" />
        </Accordion>
      </div>
    </Sidebar>
    <Results searchPlaceholder="Find a workflow." results={mockResultsData} />
  </Document>
);
