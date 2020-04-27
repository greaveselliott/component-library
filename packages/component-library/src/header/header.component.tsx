import React from 'react';
import classnames from 'classnames';

import './header.scss';

type HeaderProps = {
  hasBottomBorder?: boolean;
};

const Header: React.FC<HeaderProps> = ({ children, hasBottomBorder }) => (
  <header
    className={classnames('header', {
      'header--has-bottom-border': hasBottomBorder,
    })}
  >
    {children}
  </header>
);

export default Header;
