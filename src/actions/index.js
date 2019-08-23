import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from '../components/firebase-config.js';


firebase.initializeApp(config);

const db = firebase.firestore();
const collection = db.collection('tweets');


export function addQa(user, title, question) {
    return {
        type: 'ADD',
        user: user,
        title: title,
        question:question
    }
}


export const fetchPosts = () => dispatch => {
    collection.orderBy('created').get()
            .then(snapshot => {
                snapshot.docs.map(doc => {
                    //allitemsにデータを代入
                    const allItems = {
                        type: 'INIT',
                        user: doc.data().user,
                        title: doc.data().title,
                        question: doc.data().question,
                        id:doc.id,
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            }, );
 }
export const fetchPost = (id) => dispatch => {
   collection.doc(id).get().then(snapshot => {
                
                    //allitemsにデータを代入
                    const allItems = {
                        type: 'DETAIL',
                        user: snapshot.data().user,
                        title: snapshot.data().title,
                        question: snapshot.data().question,
                        id:snapshot.id
                    }
                    //リデューサー
                    dispatch(allItems);
                }, );
            
 }



 export const createPost = data => {
    //データベースに保存
    collection.add({
        ...data,
        created:
          firebase.firestore.FieldValue.serverTimestamp()
      }).then(doc => {
        console.log(`${doc.id}をDBに保存した`);
      })
        .catch(error => {
          console.log(error);
        });

 }
