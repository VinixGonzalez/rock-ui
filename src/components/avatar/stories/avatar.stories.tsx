import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { Avatar, AvatarBadge } from '../';
import { QuestionIcon, StarIcon } from '@chakra-ui/icons';
import { Stack } from '../../stack';

export default {
  title: 'Avatar',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

export const basic = () => <Avatar name={'Gabriel Maracaípe'}></Avatar>;

export const withPicture = () => (
  <Avatar src={'https://bit.ly/2DU7Ngr'} name={'Gabriel Maracaípe'}></Avatar>
);

export const withIcon = () => <Avatar icon={<QuestionIcon />}></Avatar>;

export const withBadge = () => (
  <>
    <Stack spacing={4} direction={'row'}>
      <Avatar>
        <AvatarBadge boxSize="1.25em" bg="green.500" />
      </Avatar>

      <Avatar src={'https://bit.ly/2DU7Ngr'}>
        <AvatarBadge boxSize="1.25em" bg="blue.500" icon={<StarIcon />} />
      </Avatar>
    </Stack>
  </>
);
