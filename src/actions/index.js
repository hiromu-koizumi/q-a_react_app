import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from '../components/firebase-config.js';
import history from '../history';

import "firebase/auth";




firebase.initializeApp(config);

const db = firebase.firestore();


export const fetchPosts = () => async (dispatch) => {
  // var uid = await firebase.auth().currentUser;
  console.log(firebase.auth().currentUser)
  const questions = [];
  await db.collection('tweets').orderBy('created').get()
    .then(snapshot => {
      // console.log(snapshot.docs);
      snapshot.docs.map(doc => {
        //allitemsにデータを代入
        const question = {
          name: doc.data().name,
          title: doc.data().title,
          question: doc.data().question,
          id: doc.id,
        }
        questions.unshift(question);
      }, );
      dispatch({
        type: 'INIT',
        questions
      });
    }, );
}

export const createQuestion = (formValues, uid) => async (dispatch) => {

  let postId;
  //データベースに保存
  await db.collection('tweets').add({
      ...formValues,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      console.log(`${doc.id}をDBに保存した`);
      postId = doc.id
    })
    .catch(error => {
      console.log(error);
    });

  db.collection('users').doc(uid).collection('question').add({
      ...formValues,
      postId: postId,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      console.log(`${doc.id}をDBに保存した`);
    })
    .catch(error => {
      console.log(error);
    });
}

export const createAnswer = (formValues, id) => async (dispatch) => {

  db.collection('tweets').doc(id).collection('answer').add({
      ...formValues,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      console.log(`${doc.id}をDBに保存した`);
    })
    .catch(error => {
      console.log(error);
    });
}

export const fetchAnswers = (id) => (dispatch) => {
  const answers = [];
  db.collection('tweets').doc(id).collection('answer').orderBy('created').get()
    .then(snapshot => {
      snapshot.docs.map(doc => {
        //allitemsにデータを代入
        const answer = {
          name: doc.data().name,
          answer: doc.data().answer,
        }
        answers.unshift(answer);

        //リデューサー
      }, );
      dispatch({
        type: 'LOAD_ANSWER',
        answers
      });
    }, );
}

export const resetAnswer = () => dispatch => {
  const answers = {};
  dispatch({
    type: 'RESET_ANSWER',
    answers
  });
}

//詳細ページで再読み込みする際、これがないとページが表示されない
export const fetchPost = (id) => (dispatch) => {
  console.log(firebase.auth().currentUser)
  db.collection('tweets').doc(id).get()
    .then(snapshot => {
      //allitemsにデータを代入
      const payload = {
        name: snapshot.data().name,
        title: snapshot.data().title,
        question: snapshot.data().question,
        id: id
      }

      dispatch({
        type: 'FETCH_QUESTION',
        payload: payload
      });

    }, );
}


export const signUp = formValues => async (dispatch) => {
  //データベースに保存
  await firebase.auth().createUserWithEmailAndPassword(formValues.mail, formValues.password).catch(function (error) {
    // Handle Errors here.
    console.log('error')

  });

  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function () {
      firebase.auth().signInWithEmailAndPassword(formValues.mail, formValues.password).catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log("miss")
      })
    }).catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
    });

  var user = firebase.auth().currentUser;

  if (user) {
    const uid = user.uid;
    dispatch({
      type: 'SIGN_IN',
      payload: uid
    });

    db.collection('users').doc(uid).set({
        userId: uid
      }).then(doc => {})
      .catch(error => {
        console.log(error);
      });

  } else {
    console.log('e')
    // No user is signed in.
  }
}

export const signInAction = () => (dispatch) => {

  firebase.auth().onAuthStateChanged(function(user){
    if (user) {
      // User is signed in.
      dispatch( {
        type: 'SIGN_IN',
        payload: user.uid
      });
    } else {
      console.log("error")
    }
  });
  
};

export const signOutAction = () => {
  return {
    type: 'SIGN_OUT'
  };
};