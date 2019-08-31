import _ from 'lodash';




//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state,..._.mapKeys(action.questions,'questionId')};
        case 'FETCH_QUESTION':
            return { ...state, [action.payload.questionId]: action.payload };
        case 'ADD_GOODCOUNT':
            return { ...state, [action.questionId]: action.payload};
        default:
            return state;
    }
}

