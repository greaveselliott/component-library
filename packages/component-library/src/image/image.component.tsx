import React from 'react';
import classnames from 'classnames';

import './image.scss';

type ImageProps = {
  src: string;
  alt: string;
  isRound?: boolean;
};

const Image: React.FC<ImageProps> = ({ src, alt, isRound }) => (
  <div className={classnames('image', { 'image--is-round': isRound })}>
    <img className="image__tag" src={src} alt={alt} />
  </div>
);

export default Image;
