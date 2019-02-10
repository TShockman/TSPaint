import {NAME as STUDIO_NAME} from './app/modules/studio/actions';
import studioReducer from './app/modules/studio/reducer';

import {NAME as SIDEBAR_NAME} from './app/modules/sidebar/actions';
import sidebarReducer from './app/modules/sidebar/reducer';

export default {
  [STUDIO_NAME]: studioReducer,
  [SIDEBAR_NAME]: sidebarReducer
};