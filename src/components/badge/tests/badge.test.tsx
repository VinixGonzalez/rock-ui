import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Badge } from '../badge';

describe('Badge', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <Badge colorScheme="green" textTransform="none">
        Success
      </Badge>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const badge = document.querySelector('.chakra-badge');

    expect(badge).toBeTruthy();
    expect(badge && badge.innerHTML).toBe('Success');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
