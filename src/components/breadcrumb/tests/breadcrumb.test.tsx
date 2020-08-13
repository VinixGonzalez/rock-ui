import React from 'react';
import * as ReactDOM from 'react-dom';
import ReactTestUtils from 'react-dom/test-utils';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '../';

describe('Breadcrumb', () => {
  it('renders without crashing', () => {
    // setup a DOM element as a render target
    const container = document.createElement('div');
    // container *must* be attached to document so events work correctly.
    document.body.appendChild(container);
    const component = (
      <Breadcrumb>
        <BreadcrumbItem>
          <BreadcrumbLink href="#">Home</BreadcrumbLink>
        </BreadcrumbItem>
      </Breadcrumb>
    );

    ReactTestUtils.act(() => {
      ReactDOM.render(component, container);
    });

    const breadcrumb = document.querySelector('.chakra-breadcrumb');
    const breadcrumbItem = document.querySelector(
      '.chakra-breadcrumb__list-item'
    );
    const breadcrumbLink = document.querySelector('.chakra-breadcrumb__link');

    expect(breadcrumb).toBeTruthy();
    expect(breadcrumbItem).toBeTruthy();
    expect(breadcrumbLink && breadcrumbLink.innerHTML).toBe('Home');
    expect(breadcrumbLink && breadcrumbLink.getAttribute('href')).toBe('#');

    ReactDOM.unmountComponentAtNode(container);
    container.remove();
  });
});
