import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberDecrementStepper,
  NumberIncrementStepper,
} from '../';

describe('Number Input', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <NumberInput>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const inputElement = document.querySelector('input[inputmode="numeric"]');
    const incBtn = document.querySelector('div[role="button"]');

    expect(inputElement).toBeTruthy();
    expect(incBtn).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
  it('call the callback functions', () => {
    // setup after the testing library is merged
  });
});
