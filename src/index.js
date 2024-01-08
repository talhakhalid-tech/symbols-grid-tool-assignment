'use strict';

import { create, Flex } from 'smbls';

import designSystem from './designSystem';
import { CustomFooter, GridSelection } from './components';

import config from '../config';

console.log(`X value: ${config.x}`);
console.log(`Y value: ${config.y}`);

create(
  {
    props: {
      theme: 'document',
      flow: 'column',
      height: '100vh',
      align: 'center space-between'
    },
    state: { totalX: 16, totalY: 8, selectedX: 0, selectedY: 0 },
    content: {
      GridSelection
    },

    Header: {},

    Footer: CustomFooter
  },
  {
    designSystem
  }
);
