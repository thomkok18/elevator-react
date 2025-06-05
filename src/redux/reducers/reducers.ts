import {combineReducers} from 'redux';
import elevatorReducer from './elevatorReducer';
import personReducer from "./personReducer";

export default combineReducers({
    elevator: elevatorReducer,
    person: personReducer
});