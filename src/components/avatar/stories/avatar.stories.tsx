import { Container } from '@chakra-ui/layout';
import * as React from 'react';
import { QuestionIcon } from '@chakra-ui/icons';
import { BadgeIcon } from '../../../icons/badge';
import { Stack } from '../../stack';
import { Avatar, AvatarBadge, AvatarGroup } from '../';

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

export const groupAvatar = () => (
  <AvatarGroup size="md" max={2}>
    <Avatar name="Gabriel Maracaípe" src="https://bit.ly/2DU7Ngr" />
    <Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
    <Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
    <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
    <Avatar name="Prosper Otemuyiwa" src="https://bit.ly/prosper-baba" />
    <Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
  </AvatarGroup>
);
