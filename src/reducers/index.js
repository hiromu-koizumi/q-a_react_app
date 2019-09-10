import {combineReducers} from 'redux';
import postReducer from './postReducer';
import answerReducer from './answerReducer';
import {reducer as formReducer} from 'redux-form';
import authReducer from './authReducer';
import myQuestionsReducer from './myQuestionsReducer';
import myAnswersReducer from './myAnswersReducer';
import pageReducer from './pageReducer';
import responseReducer from './responseReducer';
import loadingReducer from './loadingReducer';
import myPageTabReducer from './myPageTabReducer';
import myPageOptionReducer from './myPageOptionReducer';



export default combineReducers({
    questions:postReducer,
    form:formReducer,
    answer:answerReducer,
    auth:authReducer,
    myQuestions: myQuestionsReducer,
    myAnswers: myAnswersReducer,
    myPageTab: myPageTabReducer,
    page: pageReducer,
    response: responseReducer,
    loading: loadingReducer,
    myPageOption: myPageOptionReducer,
});