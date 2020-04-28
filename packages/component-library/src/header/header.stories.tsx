import React from 'react';

import { H1, Button, Image, CompanyLogo } from '..';

import PngSampleThree from '../image/img/sample-3.png';

import Header from './header.component';

export default { title: 'Header layout' };

export const HeaderMain = () => (
  <Header>
    <H1>Dashboard</H1>
    <Button>New workflow</Button>
  </Header>
);

export const HeaderSidebar = () => (
  <Header hasBottomBorder>
    <CompanyLogo href="/" />
    <Image src={PngSampleThree} alt="A sample image" isRound />
  </Header>
);
