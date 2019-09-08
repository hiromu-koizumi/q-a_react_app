import _ from 'lodash';

//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return {..._.mapKeys(action.questions,'questionId')};
        case 'FETCH_QUESTION':
            return { ...state, [action.payload.questionId]: action.payload };
        case 'QUESTION_ADD_GOODCOUNT':
            return { ...state, [action.questionId]: action.payload};
        case 'SCROLL_FETCH_QUESTIONS':
            return {...state,..._.mapKeys(action.questions,'questionId')};
        default:
            return state;
    }
}

