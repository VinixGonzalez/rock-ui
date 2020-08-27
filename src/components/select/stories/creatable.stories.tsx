import * as React from 'react';
import { Container } from '@chakra-ui/layout';
import { CreatableSelect } from '../';
import { colourOptions } from '../constants';

export default {
  title: 'Creatable Select',
  decorators: [
    (Story: any) => (
      <Container mt="40px">
        <Story />
      </Container>
    ),
  ],
};

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, ''),
});

const defaultOptions = [
  createOption('One'),
  createOption('Two'),
  createOption('Three'),
];

export const basic = () => {
  return (
    <>
      <div>Start typing in the select</div>
      <CreatableSelect isClearable options={colourOptions} />
    </>
  );
};

export const multi = () => {
  return (
    <>
      <div>Start typing in the select</div>
      <CreatableSelect isMulti options={colourOptions} />
    </>
  );
};

export const HandleOptionCreate = () => {
  const [state, setState] = React.useState({
    isLoading: false,
    options: defaultOptions,
    value: {},
  });
  const handleChange = (newValue: any) => {
    setState({ ...state, value: newValue });
  };
  const handleCreate = (inputValue: any) => {
    setState({ ...state, isLoading: true });
    setTimeout(() => {
      const { options } = state;
      const newOption = createOption(inputValue);
      setState({
        isLoading: false,
        options: [...options, newOption],
        value: newOption,
      });
    }, 1000);
  };
  return (
    <CreatableSelect
      isClearable
      isDisabled={state.isLoading}
      isLoading={state.isLoading}
      onChange={handleChange}
      onCreateOption={handleCreate}
      options={state.options}
      value={state.value}
    />
  );
};
