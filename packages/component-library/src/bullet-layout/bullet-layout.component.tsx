import React from 'react';

import './bullet-layout.scss';

type BulletLayoutProps = {
  BulletPoint: React.FC;
  children: React.ReactNode;
};

const BulletLayout: React.FC<BulletLayoutProps> = ({
  BulletPoint,
  children,
}) => (
  <div className="bullet-layout">
    <div className="bullet-layout__bullet-point">{<BulletPoint />}</div>
    <div className="bullet-layout__content">{children}</div>
  </div>
);

export default BulletLayout;
