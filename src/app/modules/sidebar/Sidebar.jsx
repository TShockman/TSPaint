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
    newPainting: PropTypes.func.isRequired,
    loadPainting: PropTypes.func.isRequired,
    importPainting: PropTypes.func.isRequired
  };

  handleNew = event => {
    const {newPainting} = this.props;
    newPainting();
  };

  handleLoadFactory = painting => event => {
    const {loadPainting} = this.props;
    loadPainting({painting});
  };

  handleImport = event => {
    const {importPainting} = this.props;
    if (event.target.files.length > 0) {
      console.log(event.target.files[0])
      importPainting({fileBlob: event.target.files[0]});
    }
    event.preventDefault();
  };

  render() {
    const {paintings} = this.props;
    return (
      <div className="sidebar">
        <h1>My Paintings</h1>
        <ul>
          <li><button onClick={this.handleNew}>New Painting</button></li>
          {paintings.map(painting => {
            const json = JSON.stringify(painting);
            const blob = new Blob([json], {type: "application/json"});
            const url  = URL.createObjectURL(blob);
            return (
              <li key={painting.paintingId}>
                <span>{painting.title}</span>
                <a download={`${painting.title}.json`} href={url}>D</a>
                <button onClick={this.handleLoadFactory(painting)}>-></button>
              </li>
            );
          })}
        </ul>
        <button>
          <input onChange={this.handleImport} type="file"/>
        </button>
      </div>
    );
  }
}