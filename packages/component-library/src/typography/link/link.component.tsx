import React, { FC, AnchorHTMLAttributes } from 'react';
import './link.scss';

const Link: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = ({
  children,
  href,
  ...props
}) => {
  return (
    <a {...props} className="link" href={href}>
      {children}
    </a>
  );
};

export default Link;
