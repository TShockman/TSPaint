import {connect} from 'react-redux';
import {selectSidebarState} from './selectors';
import Sidebar from './Sidebar';
import {NEW_PAINTING} from './actions';

function mapStateToProps(state) {
  const {paintings} = selectSidebarState(state);
  return {paintings: Object.values(paintings)};
}

function mapDispatchToProps(dispatch) {
  return {
    newPainting: () => dispatch({
      type: NEW_PAINTING
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);