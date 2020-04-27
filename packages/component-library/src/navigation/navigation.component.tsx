import React from 'react';

import './navigation.scss';

const Navigation: React.FC = ({ children }) => (
  <nav className="navigation">
    <ul className="navigation__list">
      {React.Children.map(children, (child, index) => (
        <li className="navigation__list-item" key={`navigation-${index}`}>
          {child}
        </li>
      ))}
    </ul>
  </nav>
);

export default Navigation;
