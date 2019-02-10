import {Record, List} from 'immutable';
import {COLOR_CANVAS_CELL, SELECT_PEN_COLOR} from './actions';
import {defaultColors} from './constants';

export const StudioState = new Record({
  paletteColors: [],
  selected: "",
  canvasColors: [],
  doneActions: [],
  undoneActions: []
});

const initialState = new StudioState({
  paletteColors: defaultColors,
  selected: defaultColors[0],
  canvasColors: Array(256).fill("#AAAAAA")
});

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PEN_COLOR:
      return state.set('selected', action.color);
    case COLOR_CANVAS_CELL:
      const {index, color} = action;
      const doneAction = {from: color, to: state.selected, index};
      state = state.set('undoneActions', []);
      state = state.set('doneActions', state.doneActions.concat([doneAction]));
      return state.set('canvasColors', state.canvasColors.map((canvColor, i) => {
        return i === index ? state.selected : canvColor;
      }));
    default: {
      return state;
    }
  }
}