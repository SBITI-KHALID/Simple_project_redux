import { legacy_createStore } from 'redux';
import Reducers from './reducer';


export const store = legacy_createStore(Reducers);