import React from 'react';

import { H2 } from '..';

import './document.scss';

type DocumentProps = { title: string };

const Document: React.FC<DocumentProps> = ({ title, children }) => (
  <main className="document">
    <div className="document__wrapper">
      <H2>{title}</H2>
      <div className="document__page">{children}</div>
    </div>
  </main>
);

export default Document;
