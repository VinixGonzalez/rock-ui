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

const components = {
  DropdownIndicator: null,
};

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

export const MultiSelectTextInput = () => {
  const [state, setState] = React.useState({
    inputValue: '',
    value: [],
  });

  const handleChange = (value: any) => {
    setState({ ...state, value });
  };
  const handleInputChange = (inputValue: string) => {
    setState({ ...state, inputValue });
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
    const { inputValue, value } = state;
    if (!inputValue) return;
    switch (event.key) {
      case 'Enter':
      case 'Tab':
        setState({
          inputValue: '',
          value: [...value, createOption(inputValue)],
        });
        event.preventDefault();
    }
  };

  return (
    <CreatableSelect
      components={components}
      inputValue={state.inputValue}
      isClearable
      isMulti
      menuIsOpen={false}
      onChange={handleChange}
      onInputChange={handleInputChange}
      onKeyDown={handleKeyDown}
      placeholder="Type something and press enter..."
      value={state.value}
    />
  );
};
