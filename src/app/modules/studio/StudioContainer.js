import {connect} from 'react-redux';
import Studio from './Studio';
import {SELECT_PEN_COLOR, COLOR_CANVAS_CELL} from './actions';
import {selectStudioState} from './selectors';

function mapStateToProps(state) {
  const {paletteColors, selected, canvasColors} = selectStudioState(state);
  return {paletteColors, selected, canvasColors};
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
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);