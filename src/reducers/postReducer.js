import {createPost} from '../actions'

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
        case 'DETAIL':
            return detailReduce(state,action);
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
        id:action.id
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
function detailReduce(state, action) {
    let data = {
    user:action.user,
    title:action.title,
    question: action.question,
    id:action.id
    }
    return {
        //...stateを入れることで現在ののstateを保持する
        //入れないと現在のstateが消えてしまう
        ...state,
        detail: data,
    }
}
