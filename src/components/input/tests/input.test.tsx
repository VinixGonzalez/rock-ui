import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { CheckIcon } from '@chakra-ui/icons';
import { Input, InputGroup, InputRightElement, InputLeftElement } from '../';

describe('Input', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <InputGroup>
        <InputLeftElement color="gray.300" fontSize="1.2em" children="$" />
        <Input placeholder="Enter amount" padding="0 40px" />
        <InputRightElement children={<CheckIcon color="green.500" />} />
      </InputGroup>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const inputGroup = document.querySelector('.chakra-input__group');
    const inputLeftElement = document.querySelector(
      '.chakra-input__left-element'
    );
    const inputElement = document.querySelector('.chakra-input');
    const inputRightElement = document.querySelector(
      '.chakra-input__right-element'
    );

    expect(inputGroup).toBeTruthy();
    expect(inputLeftElement).toBeTruthy();
    expect(inputElement).toBeTruthy();
    expect(inputRightElement).toBeTruthy();

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
  it('call the callback functions', () => {
    // setup after the testing library is merged
  });
});
