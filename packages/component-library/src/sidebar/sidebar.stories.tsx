import React from 'react';
import {
  faHome,
  faChartLine,
  faBookOpen,
  faLock,
  faCog,
} from '@fortawesome/free-solid-svg-icons';

import { Image, CompanyLogo, Header, Navigation, NavigationLink } from '..';

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
  <Header hasBottomBorder>
    <CompanyLogo href="/" />
    <Image src={PngSampleThree} alt="A sample image" isRound />
  </Header>
);
