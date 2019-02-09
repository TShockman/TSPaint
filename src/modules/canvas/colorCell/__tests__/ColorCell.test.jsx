import ColorCell from '../ColorCell';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import { mount } from 'enzyme';

const renderer = new ReactShallowRenderer();

describe('ColorCell', () => {
  it('renders consistently', () => {
    const colorCell = <ColorCell index={55} color={"#34F600"} onSelect={jest.fn()}/>;
    expect(renderer.render(colorCell)).toMatchSnapshot();
  });

  it('passes index and color to onSelect function', () => {
    const mockSelect = jest.fn();
    const colorCell = <ColorCell index={55} color={"#34F600"} onSelect={mockSelect}/>;
    const wrapper = mount(colorCell);

    expect(mockSelect).toHaveBeenCalledTimes(0);
    wrapper.find('.cell').simulate('click');
    expect(mockSelect).toHaveBeenCalledTimes(1);
    expect(mockSelect).toHaveBeenLastCalledWith({index: 55, color: "#34F600"});
  });
});