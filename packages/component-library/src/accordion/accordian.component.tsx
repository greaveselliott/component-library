import React, { useState } from 'react';
import classnames from 'classnames';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';

import { BulletLayout, SimpleIcon } from '..';

import './accordion.scss';

type AccordionProps = {
  title: string;
};

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [isAccordionOpen, toggleAccordion] = useState(true);

  return (
    <div
      className={classnames('accordion', {
        'accordion--is-closed': !isAccordionOpen,
      })}
    >
      <button
        className="accordion__title"
        id={`accordion-${title}`}
        aria-controls={`accordion-region-${title}`}
        onClick={() => toggleAccordion(!isAccordionOpen)}
      >
        <BulletLayout
          BulletPoint={() => (
            <SimpleIcon icon={isAccordionOpen ? faCaretDown : faCaretUp} />
          )}
        >
          {title}
        </BulletLayout>
      </button>
      <div
        role="region"
        id={`accordion-region-${title}`}
        aria-expanded={isAccordionOpen}
        aria-labelledby={`accordion-${title}`}
        className="accordion__region"
      >
        {isAccordionOpen && children}
      </div>
    </div>
  );
};

export default Accordion;
