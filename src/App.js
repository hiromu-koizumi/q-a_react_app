import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import config from './firebase-config.js';

firebase.initializeApp(config);
const db = firebase.firestore();
const collection = db.collection('tweets');


class App extends Component {
  constructor(props) {
    super(props);
    this.state = { items: [], user: '', title: '', question: '' };
    
    //onChangeで関数を呼び出すときはbindしないといけない
    this.question = this.question.bind(this);
    this.userName = this.userName.bind(this);
    this.title = this.title.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    collection.orderBy('created').get()
      .then(snapshot => {
        snapshot.docs.map(doc => {
          console.log(doc.data());

          const allItems = {
            user: doc.data().user,
            title: doc.data().title,
            question: doc.data().question,
            created: doc.data().created,
          }

          this.setState(state => ({
            items: state.items.concat(allItems),
            user: '',
            title: '',
            question: ''
          }));
        });
      });
  }

  render() {
    return (
      <React.Fragment>
        <header className="">Q&A</header>
        <div className="ui container">
          <form onSubmit={this.handleSubmit}
            autoComplete="off"
          className="ui form"
          >
            <div className="field">
            <input
              onChange={this.userName}
              value={this.state.user}
              id='tweets'
              placeholder="名前"
            />
            </div>

            <div className="field">
            <input
              onChange={this.title}
              value={this.state.title}
              id='tweets'
              placeholder="タイトル"
            />
            </div>

            <div className="field">
            <textarea
              id="new-todo"
              onChange={this.question}
              value={this.state.question}
                placeholder="質問"
                rows="3"
            />
            </div>
            <button
              className="ui green inverted button"
              type="submit"
            >質問する
            </button>
          </form>
          </div>
      　{/*  TweetList Componentの呼び出し */}
        <div className="">
          <TweetList items={this.state.items} />
        </div>
      </React.Fragment>
    );
  }

  question(event) {
    this.setState({ question: event.target.value });
  }
  title(event) {
    this.setState({ title: event.target.value });
  }

  userName(event){
    this.setState({ user: event.target.value});
  }

  handleSubmit(event) {
    {/*  ユーザー名・ツイートが入力されなかった場合のバリデーション */}
    event.preventDefault();
    if(this.state.user === "") {
      alert('ユーザー名を入力してください')
      return;
    } else if(this.state.title === "") {
      alert('タイトルを入力してください')
      return;
    }
     else if(this.state.question === "") {
      alert('質問を入力してください')
      return;
    }

    const newItem = {
      user: this.state.user,
      title: this.state.title,
      question: this.state.question,
    };

    //データベースに保存
    collection.add({
      user: this.state.user,
      title: this.state.title,
      question: this.state.question,
      created:
        firebase.firestore.FieldValue.serverTimestamp()
    }).then(doc => {
      console.log(`${doc.id}をDBに保存した`);
    })
      .catch(error => {
        console.log(error);
      });
    

    this.setState(state => ({
      items: state.items.concat(newItem),
      user: '',
      title:'',
      question: ''
    }));
  }
}

class TweetList extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="wrap">

        {this.props.items.map((item, i) => (

        <a className="ui fluid card" key={i}>
  <div className="content">
              <div className="header">{item.title}</div>
              <div className="meta">
                {item.user}
  </div>
    <div className="description">
    <p>{item.question}</p>
    </div>
  </div>
          </a>
           ))}
        </div>
        
       
    
         
        
      </React.Fragment>
    );
  }
}

export default App;
