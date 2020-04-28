import { configure } from '@storybook/react';
import '../src/global/global-reset.scss';
import './storybook-theme.scss';

configure(require.context('../src/', true, /\.stories.tsx$/), module);
