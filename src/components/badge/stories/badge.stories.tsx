import { Container, HStack } from '@chakra-ui/layout';
import * as React from 'react';
import { Badge } from '../';

export default {
  title: 'Badge',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Badge>Default</Badge>;

export const withVariants = () => (
  <HStack spacing="24px">
    <Badge variant="outline" colorScheme="green">
      Default
    </Badge>
    <Badge variant="solid" colorScheme="green">
      Success
    </Badge>
    <Badge variant="subtle" colorScheme="green">
      Removed
    </Badge>
  </HStack>
);

export const withColorScheme = () => (
  <HStack>
    <Badge>Default</Badge>
    <Badge colorScheme="green">Success</Badge>
    <Badge colorScheme="red">Removed</Badge>
    <Badge colorScheme="purple">New</Badge>
  </HStack>
);

export const WithFontSize = () => (
  <HStack spacing="24px">
    <Badge ml="1" fontSize="0.8em" colorScheme="green">
      New
    </Badge>
    <Badge ml="1" fontSize="1em" colorScheme="red">
      New
    </Badge>
    <Badge ml="1" fontSize="2em" colorScheme="purple">
      New
    </Badge>
  </HStack>
);

export const withTextTransform = () => (
  <HStack spacing="24px">
    <Badge colorScheme="green">default</Badge>
    <Badge colorScheme="green" textTransform="capitalize">
      capitalized
    </Badge>
    <Badge colorScheme="green" textTransform="none">
      none
    </Badge>
  </HStack>
);

export const withCustomPadding = () => (
  <HStack spacing="24px">
    <Badge variant="outline" colorScheme="green" padding="10px">
      10px
    </Badge>
    <Badge variant="outline" colorScheme="green" padding="10px 20px">
      10px 20px
    </Badge>
    <Badge variant="outline" colorScheme="green" padding="10px 5px 20px 30px">
      10px 5px 20px 30px
    </Badge>
  </HStack>
);
