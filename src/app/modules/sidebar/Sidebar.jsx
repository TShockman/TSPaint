import React, {Component} from 'react';
import PropTypes from 'prop-types';
import theme from './sidebar.scss';

export default class Sidebar extends Component {
  static propTypes = {
    paintings: PropTypes.arrayOf(PropTypes.shape({
      paintingId: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      canvasColors: PropTypes.arrayOf(PropTypes.string).isRequired,
      tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    })).isRequired,
    newPainting: PropTypes.func.isRequired
  };

  handleNew = event => {
    const {newPainting} = this.props;
    newPainting();
  };

  render() {
    const {paintings} = this.props;
    return (
      <div className="sidebar">
        <h1>My Paintings</h1>
        <ul>
          <li><button onClick={this.handleNew}>New Painting</button></li>
          {paintings.map(painting => <li key={painting.paintingId}>{painting.title}</li>)}
        </ul>
      </div>
    );
  }
}