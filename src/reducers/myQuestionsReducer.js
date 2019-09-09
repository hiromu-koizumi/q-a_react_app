import _ from 'lodash';

//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_MY_QUESTIONS':
            //mapKeysの第２引数はプロパティ名を設定している。actionに中のプロパティ名を指定して使用する。
            return {...state,..._.mapKeys(action.questions,'questionId')};
        default:
            return state;
    }
}
