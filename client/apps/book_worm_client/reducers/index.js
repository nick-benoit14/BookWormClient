import { combineReducers } from 'redux';
import settings            from '../../../libs/reducers/settings';
import jwt                 from '../../../libs/reducers/jwt';
import application         from './application';
import interactions from '../interactions/reducers';

const rootReducer = combineReducers({
  settings,
  jwt,
  application,
  interactions,
});

export default rootReducer;
