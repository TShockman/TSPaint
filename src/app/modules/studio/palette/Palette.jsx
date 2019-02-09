import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import ColorCell from '../colorCell';
import theme from './palette.scss';

export default class Palette extends PureComponent {
  static propTypes = {
    selectColor: PropTypes.func.isRequired,
    selected: PropTypes.string.isRequired,
    colors: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  render() {
    const {selectColor, selected, colors} = this.props;
    return (
        <div className="palette">
          {colors.map((color, i) => {
            const active = color === selected ? "active" : "";
            return <ColorCell key={i} className={active} index={i} color={color} onSelect={selectColor}/>;
          })}
        </div>
    )
  }
}