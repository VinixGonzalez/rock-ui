import { Container, Stack } from '@chakra-ui/layout';
import * as React from 'react';
import { Progress } from '../';

export default {
  title: 'Progress',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Progress value={80} />;

export const withStripes = () => (
  <Stack spacing="24px">
    <Progress value={20} hasStripe />
    <Progress value={40} hasStripe />
    <Progress value={60} hasStripe />
    <Progress value={80} hasStripe />
  </Stack>
);

export const withColorScheme = () => (
  <Stack>
    <Progress value={20} hasStripe colorScheme="pink" />
    <Progress value={40} hasStripe colorScheme="red" />
    <Progress value={60} hasStripe colorScheme="purple" />
    <Progress value={80} hasStripe colorScheme="yellow" />
  </Stack>
);

export const WithDifferentSizes = () => (
  <Stack spacing="24px">
    <Progress color="green" size="sm" value={20} />
    <Progress color="green" size="md" value={20} />
    <Progress color="green" size="lg" value={20} />
    <Progress color="green" height="32px" value={20} />
  </Stack>
);

export const WithAnimation = () => {
  const initialValues = {
    first: 20,
    second: 40,
    third: 60,
    fourth: 80,
  };

  const [values, setValues] = React.useState(initialValues);

  React.useEffect(() => {
    setTimeout(() => {
      setValues({
        first: 40,
        second: 60,
        third: 80,
        fourth: 100,
      });
    }, 500);
  }, []);

  return (
    <Stack spacing="24px">
      <Progress value={values.first} isAnimated />
      <Progress value={values.second} isAnimated />
      <Progress value={values.third} isAnimated />
      <Progress value={values.fourth} isAnimated />
    </Stack>
  );
};
