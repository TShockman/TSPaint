import React from 'react';
import Canvas from '../index';
import ReactShallowRenderer from 'react-test-renderer/shallow';

const renderer = new ReactShallowRenderer();

describe("Canvas", () => {
  it('renders consistently', () => {
    const props = {
      colorCanvasCell: jest.fn(),
      colors: ["#333333", "#F0F000", "#00F730", "#333333", "#F0F000", "#00F730"]
    };
    expect(renderer.render(<Canvas {...props}/>)).toMatchSnapshot();
  });
});