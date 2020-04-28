import React from 'react';
import {
  faHome,
  faChartLine,
  faBookOpen,
  faLock,
  faCog,
  faPlayCircle,
  faStopCircle,
} from '@fortawesome/free-solid-svg-icons';

import {
  Image,
  CompanyLogo,
  Header,
  Navigation,
  NavigationLink,
  Accordion,
  Filter,
} from '..';

import PngSampleThree from '../image/img/sample-3.png';

import Sidebar from './sidebar.component';

export default { title: 'Sidebar layout' };

export const SidebarMain = () => (
  <Sidebar>
    <div>
      <Header>
        <CompanyLogo href="/" />
        <Image src={PngSampleThree} alt="A sample image" isRound />
      </Header>
      <Navigation>
        <NavigationLink icon={faHome} href="/" title="">
          Dashboard
        </NavigationLink>
        <NavigationLink icon={faChartLine} href="/" title="">
          Analytics
        </NavigationLink>
        <NavigationLink icon={faBookOpen} href="/" title="">
          Library
        </NavigationLink>
        <NavigationLink icon={faLock} href="/" title="">
          Authentication
        </NavigationLink>
        <NavigationLink icon={faCog} href="/" title="">
          Settings &amp; people
        </NavigationLink>
      </Navigation>
    </div>
    <div>
      <Navigation>
        <NavigationLink href="/" title="">
          What's new
        </NavigationLink>
        <NavigationLink href="/" title="">
          Getting help
        </NavigationLink>
        <NavigationLink href="/" title="">
          Product feedback
        </NavigationLink>
      </Navigation>
    </div>
  </Sidebar>
);

export const SidebarPage = () => (
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
);
