import React, {Component} from 'react';
import PropTypes from 'prop-types';
import MaterialIcon from 'material-icons-react';

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

  constructor(props) {
    super(props);
    this.state = {search: ''};
  }

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
      importPainting({fileBlob: event.target.files[0]});
    }
    event.preventDefault();
  };

  handleSearch = event => {
    const {paintings} = this.props;
    event.stopPropagation();
    const search = event.target.value;

    this.setState({search});
  };

  render() {
    const {paintings} = this.props;
    const {search} = this.state;
    const lowerSearch = search.toLowerCase();
    const filteredPaintings = paintings.filter(painting => {
      if (painting.title.toLowerCase().includes(lowerSearch)) {
        return true;
      }
      const filteredTags = painting.tags.filter(tag => {
        if (tag.toLowerCase().includes(lowerSearch)) {
          return true;
        }
      });
      return filteredTags.length > 0;
    });
    return (
      <div className="sidebar">
        <h1>My Paintings</h1>
        <div className="paintingList">
          <div className="item">
            <MaterialIcon icon="search" size="tiny"/><input type="text" id="search" name="search" onChange={this.handleSearch} value={search}/>
          </div>
          {filteredPaintings.map(painting => {
            const json = JSON.stringify(painting);
            const blob = new Blob([json], {type: "application/json"});
            const url  = URL.createObjectURL(blob);
            return (
              <div className="item" key={painting.paintingId}>
                <span>{painting.title}</span>
                <span className="actions">
                  <a download={`${painting.title}.json`} href={url}><MaterialIcon icon="save" size="tiny"/></a>
                  <a onClick={this.handleLoadFactory(painting)}><MaterialIcon icon="edit" size="tiny"/></a>
                </span>
              </div>
            );
          })}
        </div>
        <div className="buttonPane">
          <button onClick={this.handleNew}>New Painting</button>
          <div className="fileWorkaround">
            <button>
              Import Painting
            </button>
            <input onChange={this.handleImport} type="file"/>
          </div>
        </div>
      </div>
    );
  }
}