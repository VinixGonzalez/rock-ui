import React from 'react';
import '@testing-library/jest-dom';
import { render, fireEvent } from '@testing-library/react';
import { Textarea } from '../';

describe('Textarea', () => {
  it('renders without crashing', () => {
    const component = <Textarea data-testid="test-input" />;

    const { getByTestId, unmount } = render(component);

    const inputElement = getByTestId('test-input');

    expect(inputElement).toBeInTheDocument();

    unmount();
  });
  it('call the callback functions', () => {
    const handleChange = jest.fn();
    const component = (
      <Textarea data-testid="test-input" onChange={handleChange} />
    );

    const { getByTestId, unmount } = render(component);

    const inputElement = getByTestId('test-input') as HTMLInputElement;

    fireEvent.change(inputElement, { target: { value: 'test' } });

    expect(handleChange).toBeCalledTimes(1);
    expect(inputElement.value).toBe('test');

    unmount();
  });
});
