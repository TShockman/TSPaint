import {connect} from 'react-redux';
import Studio from './Studio';
import {SELECT_PEN_COLOR, COLOR_CANVAS_CELL, UPDATE_TITLE, ADD_TAG, SAVE, UNDO, REDO} from './actions';
import {selectStudioState} from './selectors';

function mapStateToProps(state) {
  const {paletteColors, selected, canvasColors, title, paintingId, tags} = selectStudioState(state);
  return {paletteColors, selected, canvasColors, title, paintingId, tags};
}

function mapDispatchToProps(dispatch) {
  return {
    selectColor: ({color, index}) => dispatch({
      type: SELECT_PEN_COLOR,
      color,
      index
    }),
    colorCanvasCell: ({color, index}) => dispatch({
      type: COLOR_CANVAS_CELL,
      color,
      index
    }),
    updateTitle: ({title}) => dispatch({
      type: UPDATE_TITLE,
      title
    }),
    addTag: ({tag}) => dispatch({
      type: ADD_TAG,
      tag
    }),
    save: ({paintingId, painting}) => dispatch({
      type: SAVE,
      paintingId,
      painting
    }),
    undo: () => dispatch({
      type: UNDO
    }),
    redo: () => dispatch({
      type: REDO
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);