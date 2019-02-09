import {NAME as STUDIO_NAME} from './app/modules/studio/actions';
import studioReducer from './app/modules/studio/reducer';

export default {
  [STUDIO_NAME]: studioReducer
};