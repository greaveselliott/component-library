import React from 'react';
import {
  faLock,
  faExclamationCircle,
  faStopCircle,
  faPlayCircle,
  faHome,
  faChartLine,
  faBookOpen,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import {
  Sidebar,
  Accordion,
  Filter,
  Results,
  Image,
  CompanyLogo,
  Header,
  Navigation,
  NavigationLink,
  Document,
  AppShell,
  AppSideNavigation,
  AppBody,
  H1,
  Button,
} from '..';
import { Result } from 'results/results.component';

import PngSampleThree from '../image/img/sample-3.png';

export default { title: 'App shell' };

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

export const App = () => (
  <AppShell>
    <AppSideNavigation>
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
    </AppSideNavigation>
    <AppBody>
      <Header hasBottomBorder>
        <H1>Dashboard</H1>
        <Button>New workflow</Button>
      </Header>
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
        <Results
          searchPlaceholder="Find a workflow."
          results={mockResultsData}
        />
      </Document>
    </AppBody>
  </AppShell>
);
