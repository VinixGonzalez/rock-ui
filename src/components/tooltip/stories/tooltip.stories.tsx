import * as React from 'react';
import { Container, HStack, Stack } from '@chakra-ui/layout';
import { PhoneIcon, SearchIcon } from '@chakra-ui/icons';
import { Button } from '../../button';
import { Tooltip } from '../index';

export default {
  title: 'Tooltip',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => (
  <Tooltip label="Hey, I'm here!" aria-label="A tooltip">
    Hover me
  </Tooltip>
);

export const withIcon = () => (
  <Tooltip label="Phone number" fontSize="md">
    <PhoneIcon />
  </Tooltip>
);

export const withArrowOnTooltip = () => (
  <Tooltip hasArrow label="Search places" bg="gray.300" color="black">
    <SearchIcon />
  </Tooltip>
);

export const disabledTooltip = () => (
  <Tooltip isDisabled>
    <SearchIcon />
  </Tooltip>
);

export const withPlacement = () => (
  <Stack spacing="50px">
    <HStack spacing="30px">
      <Tooltip label="Auto start" placement="auto-start">
        <Button>Auto-Start</Button>
      </Tooltip>

      <Tooltip label="Auto" placement="auto">
        <Button>Auto</Button>
      </Tooltip>

      <Tooltip label="Auto end" placement="auto-end">
        <Button>Auto-End</Button>
      </Tooltip>
    </HStack>
    <HStack spacing="30px">
      <Tooltip label="Top start" placement="top-start">
        <Button>Top-Start</Button>
      </Tooltip>

      <Tooltip label="Top" placement="top">
        <Button>Top</Button>
      </Tooltip>

      <Tooltip label="Top end" placement="top-end">
        <Button>Top-End</Button>
      </Tooltip>
    </HStack>
    <HStack spacing="30px">
      <Tooltip label="Right start" placement="right-start">
        <Button>Right-Start</Button>
      </Tooltip>

      <Tooltip label="Right" placement="right">
        <Button>Right</Button>
      </Tooltip>

      <Tooltip label="Right end" placement="right-end">
        <Button>Right-End</Button>
      </Tooltip>
    </HStack>
    <HStack spacing="30px">
      <Tooltip label="Bottom start" placement="bottom-start">
        <Button>Bottom Start</Button>
      </Tooltip>

      <Tooltip label="Bottom" placement="bottom">
        <Button>Bottom</Button>
      </Tooltip>

      <Tooltip label="Bottom end" placement="bottom-end">
        <Button>Bottom End</Button>
      </Tooltip>
    </HStack>
    <HStack spacing="30px">
      <Tooltip label="Left start" placement="left-start">
        <Button>Left-Start</Button>
      </Tooltip>

      <Tooltip label="Left" placement="left">
        <Button>Left</Button>
      </Tooltip>

      <Tooltip label="Left end" placement="left-end">
        <Button>Left-End</Button>
      </Tooltip>
    </HStack>
  </Stack>
);

export const withAdditionalOptions = () => (
  <Stack spacing="50px">
    <HStack>
      <Tooltip label="I close on click">
        <Button>Close on Click - true(default)</Button>
      </Tooltip>

      <Tooltip label="I don't close on click" closeOnClick={false}>
        <Button>Close on Click - false</Button>
      </Tooltip>

      <Tooltip label="I am always open" placement="top" isOpen>
        <Button>Always Open</Button>
      </Tooltip>
    </HStack>
    <HStack>
      <Tooltip label="I am open by default" placement="left" defaultIsOpen>
        <Button>Open on startup</Button>
      </Tooltip>

      <Tooltip label="Opened after 500ms" openDelay={500}>
        <Button>Delay Open - 500ms</Button>
      </Tooltip>

      <Tooltip label="Closed after 500ms" closeDelay={500}>
        <Button>Delay Close - 500ms</Button>
      </Tooltip>
    </HStack>
    <HStack>
      <Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
        <Button>Arrow size - 15px</Button>
      </Tooltip>
    </HStack>
  </Stack>
);
