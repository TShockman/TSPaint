import {Record, List} from 'immutable';
import {SELECT_PEN_COLOR} from './actions';
import {defaultColors} from './constants';

export const StudioState = new Record({
  colors: [],
  selected: ""
});

const initialState = new StudioState({
  colors: defaultColors,
  selected: defaultColors[0]
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PEN_COLOR:
      return state.set('selected', action.color);
    default: {
      return state;
    }
  }
}