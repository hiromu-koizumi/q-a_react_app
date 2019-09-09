import {combineReducers} from 'redux';
import postReducer from './postReducer';
import answerReducer from './answerReducer';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import myDataReducer from './myDataReducer';
import pageReducer from './pageReducer';
import responseReducer from './responseReducer';
import loadingReducer from './loadingReducer';
import myPageTabReducer from './myPageTabReducer';



export default combineReducers({
    questions:postReducer,
    form:formReducer,
    answer:answerReducer,
    auth:authReducer,
    myData: myDataReducer,
    myPageTab: myPageTabReducer,
    page: pageReducer,
    response: responseReducer,
    loading: loadingReducer,
});