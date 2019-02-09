import {connect} from 'react-redux';
import Studio from './Studio';
import {SELECT_PEN_COLOR} from './actions';
import {selectStudioState} from './selectors';

function mapStateToProps(state) {
  const {colors, selected} = selectStudioState(state);
  return {colors, selected};
}

function mapDispatchToProps(dispatch) {
  return {
    selectColor: ({color, index}) => dispatch({
      type: SELECT_PEN_COLOR,
      color,
      index
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Studio);