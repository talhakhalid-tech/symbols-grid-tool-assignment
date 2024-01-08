'use strict';

import { create, Flex } from 'smbls';

import designSystem from './designSystem';
import { CustomFooter, GridSelection } from './components';

import config from '../config';

create(
  {
    props: {
      theme: 'document @light',
      flow: 'column',
      height: '100vh',
      align: 'center space-between',
      fontFamily: 'Europa'
    },
    state: {
      totalX: parseInt(config?.x),
      totalY: parseInt(config?.y),
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
