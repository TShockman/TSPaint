import React, {Component} from 'react';
import Palette from './palette';
import PropTypes from 'prop-types';
import theme from './studio.scss';

export default class Studio extends Component {
  static propTypes = {
    colors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    selectColor: PropTypes.func.isRequired,
  };

  render() {
    const {colors, selected, selectColor} = this.props;
    return (
      <div className="studio">
        <Palette colors={colors} selected={selected} selectColor={selectColor}/>
      </div>
    );
  }
}