import { combineReducers } from "redux";
import {dataReducer,tokenReducer} from './reducers';

export default combineReducers({
    vehicles:dataReducer,
    token:tokenReducer
});