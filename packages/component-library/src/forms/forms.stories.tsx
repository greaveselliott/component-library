import React from 'react';

import { faSearch } from '@fortawesome/free-solid-svg-icons';

import Label from './label/label.component';
import InputField from './input-field/input-field.component';
import Checkbox from './checkbox/checkbox.component';
import { SimpleIcon } from '..';

export default { title: 'Forms' };

export const FormLabel = () => <Label>Heading one</Label>;

export const FormInputField = () => (
  <InputField
    id="some-id"
    name="some-name"
    type="text"
    placeholder="Find a workflow"
  />
);

export const FormCheckbox = () => (
  <Checkbox id="some-id" name="some-name" value="value" />
);

export const SearchField = () => (
  <InputField
    id="some-id"
    name="some-name"
    type="text"
    placeholder="Find a workflow"
    Icon={() => (
      <SimpleIcon icon={faSearch} variant="large" color="primary-400" />
    )}
  />
);
