import React from 'react';

import './app-shell.scss';

const AppShell: React.FC = ({ children }) => (
  <div className="app-shell">{children}</div>
);

const AppSideNavigation: React.FC = ({ children }) => (
  <div className="app-shell__navigation">{children}</div>
);

const AppBody: React.FC = ({ children }) => (
  <div className="app-shell__body">{children}</div>
);

export { AppShell, AppSideNavigation, AppBody };
