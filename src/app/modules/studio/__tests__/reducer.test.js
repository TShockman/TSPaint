import studioReducer, {StudioState} from '../reducer';
import {SELECT_PEN_COLOR} from '../actions';
import {defaultColors} from '../constants';

describe("StudioReducer", () => {
  it("allows for selecting a color from the palette", () => {
    let state = new StudioState({
      selected: "#333333",
      colors: ["#333333", "#F0F000", "#00F730"]
    });

    const mockAction = {
      type: SELECT_PEN_COLOR,
      color: "#F0F000",
      index: 1
    };

    state = studioReducer(state, mockAction);

    expect(state.selected).toEqual("#F0F000");
    expect(state.colors).toEqual(["#333333", "#F0F000", "#00F730"]);
  });
  it("initializes default state to default colors with first selected", () => {
    const bogusAction = {
      type: "nonsense"
    };
    const state = studioReducer(undefined, bogusAction);
    expect(state.colors).toEqual(defaultColors);
    expect(state.selected).toEqual(defaultColors[0]);
  });
});
