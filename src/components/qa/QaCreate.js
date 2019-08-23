import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addQa } from '../../actions';

class QaCreate extends Component{
    constructor(props) {
        super(props);

        //stateの値を再定義しているのは、ここで値の変更を出来るようにするため。
        //stateをpropsで受け取り値を変更することは出来ない。
        this.state = {
            user: '',
            title: '',
            question: ''
        };
    this.question = this.question.bind(this);
    this.userName = this.userName.bind(this);
    this.title = this.title.bind(this);
    this.doAction = this.doAction.bind(this);
    }


    // テキストボックスの中身が変更されたら呼び出される
  question(e) {
    this.setState({ question: e.target.value });
  }
  title(e) {
    this.setState({ title: e.target.value });
  }

  userName(e){
    this.setState({ user: e.target.value});
  }
    
    
    doAction(e) {
        e.preventDefault();
        let action = addQa(this.state.user, this.state.title, this.state.question);
        this.props.dispatch(action);

        
        this.setState({
            user: '',
            title: '',
            question: ''
        });
    }

    render() {
        return (
            
            <div className="ui container">
                <form onSubmit={this.doAction}
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
                
        )
    }
}

export default connect((state)=>state)(QaCreate);