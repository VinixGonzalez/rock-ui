import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { QuestionIcon } from '@chakra-ui/icons';
import { BadgeIcon } from '../../../icons/badge';
import { Stack } from '../../stack';
import { Avatar, AvatarBadge } from '../';

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
        <AvatarBadge
          border="none"
          icon={<BadgeIcon fill={'#326ee2'} boxSize={'1.3em'} />}
        />
      </Avatar>
    </Stack>
  </>
);
