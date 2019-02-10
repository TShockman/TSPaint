import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import theme from './canvas.scss';
import ColorCell from '../colorCell';

export default class Canvas extends PureComponent {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorCanvasCell: PropTypes.func.isRequired
  };

  render() {
    const {colors, colorCanvasCell} = this.props;
    return (
      <div className="canvas">
        {colors.map((color, i) => {
          return <ColorCell key={i} index={i} color={color} onSelect={colorCanvasCell}/>;
        })}
      </div>
    );
  }
}