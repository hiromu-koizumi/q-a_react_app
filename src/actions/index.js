import firebase from 'firebase/app';
import firestore from 'firebase/firestore';

const db = firebase.firestore();
const collection = db.collection('tweets');

export const fetchPosts = () => async dispatch => {
    collection.orderBy('created').get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    console.log(doc.data());

                    //allitemsにデータを代入
                    const allItems = {
                        type: 'INIT',
                        user: doc.data().user,
                        title: doc.data().title,
                        question: doc.data().question,
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            }, );
 }