import React from 'react';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { SimpleIcon, H3, Small, Tag, BulletLayout, InputField, Card } from '..';

import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { TagColors } from 'tag/tag.component';
import { SimpleIconColours } from 'simple-icon/simple-icon.component';

import './results.scss';

export type Result = {
  icon: IconProp;
  iconColor: SimpleIconColours;
  title: string;
  tag: string;
  tagColor: TagColors;
  caption: string;
};

type ResultsProps = {
  searchPlaceholder: string;
  results: Result[];
};

const Results: React.FC<ResultsProps> = ({ searchPlaceholder, results }) => (
  <div className="results">
    <InputField
      Icon={() => (
        <SimpleIcon icon={faSearch} variant="large" color="primary-400" />
      )}
      id="search"
      name="search"
      placeholder={searchPlaceholder}
    />
    <ul className="results__list">
      {results.map(
        ({ icon, iconColor, title, tag, tagColor, caption }: Result) => (
          <Card onCardControlClick={() => alert('Card control was clicked!')}>
            <BulletLayout
              BulletPoint={() => (
                <SimpleIcon color={iconColor} icon={icon} variant="small" />
              )}
            >
              <H3>{title}</H3>
            </BulletLayout>
            <BulletLayout BulletPoint={() => <Tag color={tagColor}>{tag}</Tag>}>
              <Small>{caption}</Small>
            </BulletLayout>
          </Card>
        ),
      )}
    </ul>
  </div>
);

export default Results;
