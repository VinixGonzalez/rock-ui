import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, InputLeftElement } from '../';

describe('Input', () => {
  it('renders without crashing', () => {
    const component = (
      <InputGroup>
        <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
        <Input
          placeholder="Enter amount"
          padding="0 40px"
          data-testid="test-input"
        />
        <InputRightElement children={<CheckIcon color="green.500" />} />
      </InputGroup>
    );

    const { getByTestId, unmount } = render(component);

    const inputElement = getByTestId('test-input');

    expect(inputElement).toBeInTheDocument();

    unmount();
  });
  it('call the callback functions', () => {
    const handleChange = jest.fn();
    const component = (
      <InputGroup>
        <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
        <Input
          placeholder="Enter amount"
          padding="0 40px"
          data-testid="test-input"
          onChange={handleChange}
        />
        <InputRightElement children={<CheckIcon color="green.500" />} />
      </InputGroup>
    );

    const { getByTestId, unmount } = render(component);

    const inputElement = getByTestId('test-input') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toBeCalledTimes(1);
    expect(inputElement.value).toBe('test');

    unmount();
  });
});
