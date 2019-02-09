import Palette from '../index';
import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ReactShallowRenderer();

describe('Palette', () => {
  it('renders consistently, marking active color', () => {
    const props = {
      selectColor: jest.fn(),
      selected: "#555555",
      colors: ["#000000", "#333333", "#555555", "#FFFFFF"]
    };
    const palette = <Palette {...props}/>
    expect(renderer.render(palette)).toMatchSnapshot();
  });
});