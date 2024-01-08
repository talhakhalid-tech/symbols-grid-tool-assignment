'use strict';

import { create, Flex } from 'smbls';

import designSystem from './designSystem';
import { CustomFooter, GridSelection } from './components';

import config from '../config';

create(
  {
    props: {
      theme: 'document',
      flow: 'column',
      height: '100vh',
      align: 'center space-between'
    },
    state: {
      totalX: config.x ? parseInt(config.x) : 16,
      totalY: config.y ? parseInt(config.y) : 8,
      selectedX: 0,
      selectedY: 0
    },
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
