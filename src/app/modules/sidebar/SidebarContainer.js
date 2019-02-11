import {connect} from 'react-redux';
import {selectSidebarState} from './selectors';
import Sidebar from './Sidebar';
import {NEW_PAINTING, LOAD_PAINTING, IMPORT_PAINTING_REQUESTED} from './actions';

function mapStateToProps(state) {
  const {paintings} = selectSidebarState(state);
  return {paintings: Object.values(paintings)};
}

function mapDispatchToProps(dispatch) {
  return {
    newPainting: () => dispatch({
      type: NEW_PAINTING
    }),
    loadPainting: ({painting}) => dispatch({
      type: LOAD_PAINTING,
      painting
    }),
    importPainting: ({fileBlob}) => dispatch({
      type: IMPORT_PAINTING_REQUESTED,
      fileBlob
    })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);