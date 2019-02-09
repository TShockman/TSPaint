import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import theme from './colorCell.scss';

export default class ColorCell extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  handleClick = event => {
    event.stopPropagation();
    event.preventDefault();
    const {onSelect, index, color} = this.props;
    onSelect({index, color});
  };

  render() {
    const {color} = this.props;
    return (
      <div className="cell" style={{backgroundColor: color}} onClick={this.handleClick}> </div>
    );
  }
}