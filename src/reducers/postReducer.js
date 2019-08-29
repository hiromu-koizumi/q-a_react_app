import _ from 'lodash';




//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'INIT':
            return {...state,..._.mapKeys(action.questions,'id')};
        case 'FETCH_QUESTION':
            return {...state,[action.payload.id]:action.payload};
        default:
            return state;
    }
}

