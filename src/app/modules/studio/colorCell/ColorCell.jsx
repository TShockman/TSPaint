import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import theme from './colorCell.scss';
import cx from 'classnames';

export default class ColorCell extends PureComponent {
  static propTypes = {
    index: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    onSelect: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  handleClick = event => {
    event.stopPropagation();
    event.preventDefault();
    const {onSelect, index, color} = this.props;
    onSelect({index, color});
  };

  render() {
    const {color, className} = this.props;
    return (
      <div className={cx("cell", className)}
           style={{backgroundColor: color}}
           onClick={this.handleClick}> </div>
    );
  }
}