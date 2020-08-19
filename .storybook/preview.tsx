import CSSReset from '@chakra-ui/css-reset';
import theme from '@chakra-ui/theme';
import { ThemeProvider } from '@chakra-ui/core';
import { addDecorator } from '@storybook/react';
import * as React from 'react';

const withChakra = (StoryFn: Function) => (
  <ThemeProvider theme={theme}>
    <CSSReset />
    <div id="story-wrapper" style={{ minHeight: '100vh' }}>
      <StoryFn />
    </div>
  </ThemeProvider>
);

addDecorator(withChakra);
