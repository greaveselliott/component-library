import React from 'react';

import './sidebar.scss';

const Sidebar: React.FC = ({ children }) => (
  <aside className="sidebar">{children}</aside>
);

export default Sidebar;
