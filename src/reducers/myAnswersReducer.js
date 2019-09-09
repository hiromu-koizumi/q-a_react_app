import _ from 'lodash';




//レデューサー
export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_MY_ANSWERS':
            //postIdだと同じ質問に二度回答するとstore上で上書きされてしまうのでdocIdを指定している。
            return {...state,..._.mapKeys(action.answers,'docId')};
        default:
            return state;
    }
}