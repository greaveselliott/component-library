import React from 'react';
import {
  faExclamationCircle,
  faGlobeAmericas,
  faMousePointer,
  faBolt,
  faClipboardCheck,
  faPlug,
  faPlayCircle,
  faStopCircle,
  faHome,
  faChartLine,
  faBookOpen,
  faLock,
  faCog,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import SimpleIcon, { SimpleIconColours } from './simple-icon.component';

export default { title: 'Simple Icon' };

const iconColors: SimpleIconColours[] = [
  'primary-400',
  'shade-400',
  'accent-200',
  'accent-300',
  'accent-400',
];

const iconSet: IconProp[] = [
  faExclamationCircle,
  faGlobeAmericas,
  faMousePointer,
  faBolt,
  faClipboardCheck,
  faPlug,
  faPlayCircle,
  faStopCircle,
  faHome,
  faChartLine,
  faBookOpen,
  faLock,
  faCog,
  faSearch,
];

export const IconsSmall = () =>
  iconSet.map((iconName, indexKeyIsOkHere) => (
    <div
      style={{
        display: 'flex',
        width: '150px',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}
    >
      {iconColors.map((iconColor) => (
        <SimpleIcon icon={iconName} key={String(iconName)} color={iconColor} />
      ))}
    </div>
  ));

export const IconsLarge = () =>
  iconSet.map((iconName) => (
    <div
      style={{
        display: 'flex',
        width: '150px',
        justifyContent: 'space-between',
        marginBottom: '8px',
      }}
    >
      {iconColors.map((iconColor) => (
        <SimpleIcon
          icon={iconName}
          key={String(iconName)}
          variant="large"
          color={iconColor}
        />
      ))}
    </div>
  ));
