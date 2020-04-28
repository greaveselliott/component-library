import React from 'react';
import {
  faExclamationCircle,
  faStopCircle,
  faPlayCircle,
} from '@fortawesome/free-solid-svg-icons';

export default { title: 'Results' };

import Results, { Result } from './results.component';

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

export const ResultsSample = () => (
  <Results searchPlaceholder="Find a workflow." results={mockResultsData} />
);
