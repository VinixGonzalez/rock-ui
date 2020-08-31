import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Button } from '../../button';
import { Tooltip } from '../tooltip';

describe('Tooltip', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <Tooltip label="Hey, Im here!" isOpen>
        <Button id="tooltip-button">Hover me</Button>
      </Tooltip>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const tooltipBtn = document.querySelector('#tooltip-button');

    expect(tooltipBtn).toBeTruthy();

    ReactTestUtils.act(() => {
      tooltipBtn &&
        tooltipBtn.dispatchEvent(new MouseEvent('hover', { bubbles: true }));
    });

    const tooltip = document.querySelector('[role=tooltip]');

    expect(tooltip).toBeTruthy();
    expect(tooltip && tooltip.innerHTML).toEqual('Hey, Im here!');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
