import studioReducer, {StudioState} from '../reducer';
import {COLOR_CANVAS_CELL, SELECT_PEN_COLOR} from '../actions';
import {defaultColors} from '../constants';

describe("StudioReducer", () => {
  it("allows for selecting a color from the palette", () => {
    let state = new StudioState({
      selected: "#333333",
      paletteColors: ["#333333", "#F0F000", "#00F730"]
    });

    const mockAction = {
      type: SELECT_PEN_COLOR,
      color: "#F0F000",
      index: 1
    };

    state = studioReducer(state, mockAction);

    expect(state.selected).toEqual("#F0F000");
    expect(state.paletteColors).toEqual(["#333333", "#F0F000", "#00F730"]);
  });
  it("initializes default state consistently", () => {
    const bogusAction = {
      type: "nonsense"
    };
    const state = studioReducer(undefined, bogusAction);
    expect(state.paletteColors).toEqual(defaultColors);
    expect(state.selected).toEqual(defaultColors[0]);
    expect(state.canvasColors.length).toBe(256);
    expect(state.canvasColors[23]).toEqual(state.canvasColors[209]);
    expect(state.doneActions.length).toBe(0);
    expect(state.undoneActions.length).toBe(0);
  });
  it("allows a square on the canvas to be colored", () => {
    let state = new StudioState({
      selected: "#F0F000",
      paletteColors: ["#333333", "#F0F000", "#00F730"],
      canvasColors: ["#000000", "#000000", "#000000", "#000000", "#000000"]
    });
    const mockAction = {
      type: COLOR_CANVAS_CELL,
      color: "#000000",
      index: 2
    };
    state = studioReducer(state, mockAction);
    expect(state.canvasColors).toEqual(["#000000", "#000000", "#F0F000", "#000000", "#000000"]);
    expect(state.doneActions).toEqual([{from: "#000000", to: "#F0F000", index: 2}]);
  })
});
