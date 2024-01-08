'use strict';

import { Flex, Link } from 'smbls';

export const Header = {
  extend: Flex,
  props: {
    minWidth: '100%',
    padding: 'Z B',
    align: 'center space-between'
  },

  Flex: {
    props: { gap: 'C' },
    childExtend: {
      extend: Link,
      props: ({ props }) => ({
        textDecoration:
          window.location.pathname === props.href ? 'underline' : 'none'
      })
    },
    Text_logo: { href: '/', text: 'Hello!' },
    Text_about: { href: '/about', text: 'About' }
  },

  ThemeSwitcher: {}
};

export const ThemeSwitcher = {
  extend: Flex,
  props: { gap: 'A2' },
  childExtend: {
    props: (element, state) => ({
      active: state.globalTheme === element.key,
      cursor: 'pointer',
      '.active': {
        fontWeight: '900'
      }
    }),
    on: {
      click: (event, element, state) => {
        state.update({ globalTheme: element.key });
      }
    }
  },
  dark: { text: 'Dark' },
  light: { text: 'Light' },
  midnight: { text: 'Midnight' }
};

export const Footer = {
  props: {
    padding: 'Z B',
    order: 9
  }
};

export const GridItem = {
  tag: 'div',
  props: {
    width: '26px',
    height: '26px',
    cursor: 'pointer',
    borderRadius: '2px',
    background: 'pink'
  },
  on: {
    click: (ev, element) => {
      const x = element.state.totalX;
      const y = element.state.totalY;
      const currentX = element.props.currentX;
      const currentY = element.props.currentY;
      for (let i = 0; i < x * y; i++) {
        let background = 'pink';
        if (
          element.parent[i].props.currentX <= currentX &&
          element.parent[i].props.currentY <= currentY
        ) {
          background = 'red';
        }
        element.parent[i].update({ style: { background } });
      }
      element.state.update({
        selectedX: currentX,
        selectedY: currentY
      });
      document.querySelector(
        '[key=coordinates]'
      ).innerHTML = `Selection coordinates: ${currentX}, ${currentY}`;
      document.querySelector(
        '[key=cellCount]'
      ).innerHTML = `Total cells selected: ${currentX * currentY}`;
    }
  }
};

export const GridBox = {
  tag: 'div',
  props: {
    display: 'grid',
    gap: '4px',
    width: 'auto'
  }
};

export const GridSelection = {
  tag: 'div',
  on: {
    render: (element) => {
      const x = element.state.totalX;
      const y = element.state.totalY;

      let elements = [];
      for (let i = 1; i <= y; i++) {
        for (let j = 1; j <= x; j++) {
          elements.push({ props: { currentX: j, currentY: i } });
        }
      }
      element.set({
        extend: GridBox,
        style: {
          gridTemplateColumns: `repeat(${x}, 1fr)`,
          width: `${x * 26}px`
        },
        childExtend: GridItem,
        ...elements
      });
    }
  }
};

export const CustomFooter = {
  tag: 'div',
  props: {
    display: 'flex',
    gap: '24px'
  },
  extend: {
    coordinates: {
      text: ''
    },
    cellCount: {
      text: ''
    }
  }
};
