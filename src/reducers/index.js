import {combineReducers} from 'redux';
import postReducer from './postReducer';
import answerReducer from './answerReducer';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';


export default combineReducers({
    data:postReducer,
    form:formReducer,
    answer:answerReducer,
    auth:authReducer,
});