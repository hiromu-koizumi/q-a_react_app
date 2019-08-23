import {createPost} from '../actions'
import _ from 'lodash';

const initData = {
    post: [],
};


//レデューサー
export default (state = initData, action) => {
    switch (action.type) {
        case 'ADD':
            return addReduce(state, action);
        case 'INIT':
            return initReduce(state, action);
        default:
            return state;
    }
}


//サイトを開いた際に行われる処理。firebaseのデータをstateに保存している。
function initReduce(state, action) {
    let data = {
        user:action.user,
        title:action.title,
        question: action.question,
        }
        
        let newdata = state.post.slice();
        newdata.unshift(data);

        //ここでstateを変更している
        return {
            post:newdata
        }
}

//レデュースアクション
//質問投稿レデュース処理
function addReduce(state, action) {
    let data = {
    user:action.user,
    title:action.title,
    question: action.question,
    }
    let newdata = state.post.slice();
    newdata.unshift(data);

    //firebaseに保存
    createPost(data);
    
    //ここでstateを変更している
    return {
        post: newdata,
    }
}
