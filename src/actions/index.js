import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from '../components/firebase-config.js';
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

export const createAnswer = (formValues, postId,uid) => async (dispatch) => {

  db.collection('tweets').doc(postId).collection('answer').add({
      ...formValues,
      created: firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      console.log(`${doc.id}をDBに保存した`);
    })
    .catch(error => {
      console.log(error);
    });

    db.collection('users').doc(uid).collection('answers').add({
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

//firebaseにユーザー情報を登録し、そのユーザーでログインして、ログインユーザー情報をstoreに保存している
export const signUp = formValues => async (dispatch) => {
  //ユーザー登録
  await firebase.auth().createUserWithEmailAndPassword(formValues.mail, formValues.password).catch(function (error) {
    console.log('error')

  });

  //ユーザーログイン
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function () {
      firebase.auth().signInWithEmailAndPassword(formValues.mail, formValues.password).catch(function (error) {
        // Handle Errors here.
      })
    }).catch(function (error) {
      // Handle Errors here.
      console.log(error)

    });

  //storeに保存
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
  }
}

//既にログイン済みの人のログイン情報をstoreに保存している
export const signInAction = () => (dispatch) => {

  // firebaseからログイン中のユーザー情報を取得している
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      dispatch({
        type: 'SIGN_IN',
        payload: user.uid
      });
    } else {
      console.log("error")
    }
  });
};


//ログイン処理
//ログインするとonAuthStateChangedが自動的に呼び出されstoreに保存される
//onAuthStateChangedはdidmountなどで一度呼び出した後じゃないと自動呼び出しされないようだ
export const loginAction = (formValues) => async (dispatch) => {

  //LOCALに設定することでログイン状態を永続化している
  await firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
    .then(function () {
      firebase.auth().signInWithEmailAndPassword(formValues.mail, formValues.password).catch(function (error) {})
    }).catch(function (error) {
      console.log(error)
    });

};


export const signOutAction = () => (dispatch) => {

  firebase.auth().signOut().then(function () {
    dispatch({
      type: 'SIGN_OUT'
    })
  }).catch(function (error) {
    console.log(error)
  });

};