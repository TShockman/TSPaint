import React, {Component} from 'react';
import Palette from './palette';
import PropTypes from 'prop-types';
import theme from './studio.scss';
import Canvas from './canvas/Canvas';

export default class Studio extends Component {
  static propTypes = {
    paletteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    selectColor: PropTypes.func.isRequired,
    canvasColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorCanvasCell: PropTypes.func.isRequired
  };

  render() {
    const {
      paletteColors,
      selected,
      selectColor,
      canvasColors,
      colorCanvasCell
    } = this.props;

    return (
      <div className="studio">
        <Palette colors={paletteColors} selected={selected} selectColor={selectColor}/>
        <Canvas colors={canvasColors} colorCanvasCell={colorCanvasCell}/>
      </div>
    );
  }
}