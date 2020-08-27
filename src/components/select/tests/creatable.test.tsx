import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { CreatableSelect } from '../';
// import { colourOptions } from '../constants';

describe('Creatable Select', () => {
  it('renders without crashing', () => {
    const component = <CreatableSelect />;

    const { getByText, unmount } = render(component);

    const selectedValue = getByText('Select...');

    expect(selectedValue).toBeInTheDocument();

    unmount();
  });
  // it('calls the callback functions', () => {
  //   const handleLoad = jest.fn();
  //   const component = (
  //     <CreatableSelect options={colourOptions} />
  //   );
  //
  //   const { unmount } = render(component);
  //
  //   expect(handleLoad).toBeCalledTimes(1);
  //
  //   unmount();
  // });
});
