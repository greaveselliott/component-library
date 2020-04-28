import React from 'react';
import { IconProp } from '@fortawesome/fontawesome-svg-core';

import './navigation.scss';

import { SimpleIcon, Paragraph, BulletLayout } from '..';

type NavigationLinkProps = {
  icon?: IconProp;
  href: string;
  title: string;
};

const NavigationLink: React.FC<NavigationLinkProps> = ({
  icon,
  children,
  href,
  title,
}) => (
  <a className="navigation-link" href={href} title={title}>
    {/* Todo: Improve how this bullet layout handles undefined icons */}
    <BulletLayout
      BulletPoint={
        icon
          ? () => <SimpleIcon color="shade-400" icon={icon} variant="large" />
          : undefined
      }
    >
      <Paragraph>{children}</Paragraph>
    </BulletLayout>
  </a>
);

export default NavigationLink;
