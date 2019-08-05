import { createStore } from 'redux';

import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from '../firebase-config.js';

firebase.initializeApp(config);
const db = firebase.firestore();
const collection = db.collection('tweets');

const initData = {
    data: [],
    user: '',
    title: '',
    question: ''
};

//レデューサー
export function qaReducer(state = initData, action) {
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
        let newdata = state.data.slice();
        newdata.unshift(data);
        
        //ここでstateを変更している
        return {
            data: newdata,
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
    let newdata = state.data.slice();
    newdata.unshift(data);

    //データベースに保存
    collection.add({
      user: action.user,
      title: action.title,
      question: action.question,
      created:
        firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      console.log(`${doc.id}をDBに保存した`);
    })
      .catch(error => {
        console.log(error);
      });
    
    //ここでstateを変更している
    return {
        data: newdata,
    }
}

//アクションクリエーター(リデューサーに処理を渡している)
export function addQa(user, title, question) {
    return {
        type: 'ADD',
        user: user,
        title: title,
        question:question
    }
}

export function initQa(allItems) {
    return {
        type: 'INIT',
        user: allItems.user,
        title: allItems.title,
        question:allItems.question
    }
}

export default createStore(qaReducer);