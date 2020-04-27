import React, { useState } from 'react';

import './accordion.scss';

type AccordionProps = {
  title: string;
};

const Accordion: React.FC<AccordionProps> = ({ children, title }) => {
  const [isAccordionOpen, toggleAccordion] = useState(true);

  return (
    <div className="accordion">
      <fieldset>
        <legend
          role="button"
          className="accordion__title"
          aria-control={title}
          onClick={() => toggleAccordion(!isAccordionOpen)}
        >
          {title}
        </legend>
        <div id={title}>{isAccordionOpen && children}</div>
      </fieldset>
    </div>
  );
};

export default Accordion;
