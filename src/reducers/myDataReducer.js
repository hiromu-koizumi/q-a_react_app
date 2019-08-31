import _ from 'lodash';




//レデューサー
export default (state = {}, action) => {
    console.log(action)
    switch (action.type) {
        case 'FETCH_MY_QUESTIONS':
            //mapKeysの第２引数はプロパティ名を設定している。actionに中のプロパティ名を指定して使用する。
            return {...state,questions:_.mapKeys(action.payload,'questionId')};
        case 'FETCH_MY_ANSWERS':
            //postIdだと同じ質問に二度回答するとstore上で上書きされてしまうのでdocIdを指定している。
            return {...state,answers:_.mapKeys(action.payload,'docId')};
        // case 'FETCH_QUESTION':
        //     return {...state,[action.payload.id]:action.payload};
        default:
            return state;
    }
}