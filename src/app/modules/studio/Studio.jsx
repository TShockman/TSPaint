import React, {Component} from 'react';
import Palette from './palette';
import PropTypes from 'prop-types';
import theme from './studio.scss';
import Canvas from './canvas/Canvas';
import MaterialIcon from 'material-icons-react';

export default class Studio extends Component {
  static propTypes = {
    paletteColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    selected: PropTypes.string.isRequired,
    selectColor: PropTypes.func.isRequired,
    canvasColors: PropTypes.arrayOf(PropTypes.string).isRequired,
    colorCanvasCell: PropTypes.func.isRequired,
    title: PropTypes.string.isRequired,
    updateTitle: PropTypes.func.isRequired,
    paintingId: PropTypes.string.isRequired,
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
    addTag: PropTypes.func.isRequired,
    save: PropTypes.func.isRequired,
    undo: PropTypes.func.isRequired,
    redo: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    this.state = {tagInProgress: ''};
  }

  handleTagChange = event => {
    this.setState({tagInProgress: event.target.value});
  };

  handleAddTag = event => {
    const {addTag} = this.props;
    const {tagInProgress} = this.state;
    event.preventDefault();
    addTag({tag: tagInProgress});
    this.setState({tagInProgress: ''});
  };

  handleTitleChange = event => {
    const {updateTitle} = this.props;
    event.preventDefault();
    updateTitle({title: event.target.value});
  };

  handleSave = event => {
    const {canvasColors, title, tags, paintingId, save} = this.props;
    event.preventDefault();
    const painting = {
      canvasColors,
      title,
      tags,
      paintingId
    };
    save({painting, paintingId});
  };

  handleUndo = event => {
    const {undo} = this.props;
    undo();
  };

  handleRedo = event => {
    const {redo} = this.props;
    redo();
  };

  render() {
    const {
      paletteColors,
      selected,
      selectColor,
      canvasColors,
      colorCanvasCell,
      title,
      tags
    } = this.props;
    const {tagInProgress} = this.state;


    return (
      <div className="studio">
        <div className="palettePane">
          <Palette colors={paletteColors} selected={selected} selectColor={selectColor}/>
        </div>
        <div className="canvasPane">
          <div className="titlePane">
            <input id="title" name="title" type="text" value={title} onChange={this.handleTitleChange}/>
            <button onClick={this.handleSave} className="save">Save</button>
          </div>
          <div className="tagPane">
            <span className="tagInput">
              <input placeholder="Tag" id="tag" name="tag" type="text" value={tagInProgress} onChange={this.handleTagChange}/>
              <button onClick={this.handleAddTag}><MaterialIcon icon="add" size="tiny"/></button>
            </span>
            {
              tags.map((tag, i) => <span className="tagged" key={i}>{tag}</span>)
            }
          </div>
          <Canvas colors={canvasColors} colorCanvasCell={colorCanvasCell}/>
          <div className="undoPane">
            <button onClick={this.handleUndo}><MaterialIcon icon="undo" color="#000000"/></button>
            <button onClick={this.handleRedo}><MaterialIcon icon="redo" color="#000000"/></button>
          </div>
        </div>
      </div>
    );
  }
}