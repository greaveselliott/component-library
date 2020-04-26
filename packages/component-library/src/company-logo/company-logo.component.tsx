import React from 'react';

import svgLogo from './img/logo.svg';
import './company-logo.scss';

type CompanyLogoProps = {
  href: string;
  title?: string;
};

const CompanyLogo: React.FC<CompanyLogoProps> = ({
  href,
  title = 'A link',
}) => (
  <a className="company-logo" href={href} title={title}>
    <img className="company-logo__image" src={svgLogo} alt="The company logo" />
  </a>
);

export default CompanyLogo;
