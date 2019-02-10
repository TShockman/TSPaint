import {Record} from 'immutable';
import {COLOR_CANVAS_CELL, SELECT_PEN_COLOR, UPDATE_TITLE, ADD_TAG} from './actions';
import {defaultColors} from './constants';
import uuidv4 from 'uuid/v4';
import {NEW_PAINTING} from '../sidebar/actions';

export const StudioState = new Record({
  paletteColors: [],
  selected: "",
  canvasColors: [],
  doneActions: [],
  undoneActions: [],
  title: "",
  tags: [],
  paintingId: ""
});

const initialState = () => new StudioState({
  paletteColors: defaultColors,
  selected: defaultColors[0],
  canvasColors: Array(256).fill("#AAAAAA"),
  title: "My Painting",
  paintingId: uuidv4()
});

export default (state = initialState(), action) => {
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
    case UPDATE_TITLE:
      return state.set('title', action.title);
    case ADD_TAG:
      return state.set('tags', state.tags.concat([action.tag]));
    case NEW_PAINTING:
      return initialState();
    default: {
      return state;
    }
  }
}