import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '../';

describe('Number Input', () => {
  it('renders without crashing', () => {
    const component = (
      <NumberInput>
        <NumberInputField data-testid="test-input" />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    );

    const { getByTestId, unmount } = render(component);

    const inputElement = getByTestId('test-input');

    expect(inputElement).toBeInTheDocument();

    unmount();
  });
  it('call the callback functions', () => {
    const handleChange = jest.fn();
    const component = (
      <NumberInput>
        <NumberInputField data-testid="test-input" onChange={handleChange} />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    );

    const { getByTestId, unmount } = render(component);

    const inputElement = getByTestId('test-input') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: '23' } });

    expect(handleChange).toBeCalledTimes(1);
    expect(inputElement.value).toBe('23');

    unmount();
  });
});
