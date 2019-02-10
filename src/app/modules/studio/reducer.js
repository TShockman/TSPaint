import {Record} from 'immutable';
import {COLOR_CANVAS_CELL, SELECT_PEN_COLOR, UPDATE_TITLE, ADD_TAG} from './actions';
import {defaultColors} from './constants';
import uuidv4 from 'uuid/v4';
import {LOAD_PAINTING, NEW_PAINTING} from '../sidebar/actions';

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
  paintingId: uuidv4(),
  doneActions: [],
  undoneActions: [],
  tags: []
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
    case LOAD_PAINTING:
      state = state.set("canvasColors", action.painting.canvasColors);
      state = state.set("title", action.painting.title);
      state = state.set("tags", action.painting.tags);
      return state.set("paintingId", action.painting.paintingId);
    default: {
      return state;
    }
  }
}