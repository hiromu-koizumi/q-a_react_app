import {combineReducers} from 'redux';
import postReducer from './postReducer';
import answerReducer from './answerReducer';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import myDataReducer from './myDataReducer';
import pageReducer from './pageReducer';
import responseReducer from './responseReducer';



export default combineReducers({
    questions:postReducer,
    form:formReducer,
    answer:answerReducer,
    auth:authReducer,
    myData: myDataReducer,
    page: pageReducer,
    response: responseReducer,
});