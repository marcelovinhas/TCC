import { combineReducers } from 'redux';

import auth from './auth/reducer';
import usuario from './usuario/reducer';
import senha from './senha/reducer';

export default combineReducers({
  auth,
  usuario,
  senha,
});
