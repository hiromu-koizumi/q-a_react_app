import {combineReducers} from 'redux';
import postReducer from './postReducer';
import {reducer as formReducer} from 'redux-form';


export default combineReducers({
    data:postReducer,
    form:formReducer,
});