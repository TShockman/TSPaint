import {Record} from 'immutable';
import {SAVE} from '../studio/actions';
import {IMPORT_PAINTING_FULFILLED} from './actions';

export const SidebarState = new Record({
  paintings: {} // map from paintingId to painting
});

const initialState = new SidebarState();

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE: {
      const newPaintings = {...state.paintings, [action.paintingId]: action.painting};
      return state.set('paintings', newPaintings);
    }
    case IMPORT_PAINTING_FULFILLED: {
      const newPaintings = {...state.paintings, [action.painting.paintingId]: action.painting};
      return state.set('paintings', newPaintings);
    }
    default: {
      return state;
    }
  }
}
