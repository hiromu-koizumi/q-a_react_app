import React, { Component } from 'react';
import { connect } from 'react-redux';
// import {fetchQuestions,questionGoodCount} from '../../actions';
import {Link} from 'react-router-dom';
import QuestionList from './QuestionList';


//質問の表示処理
class TopPage extends Component{
    

    render() {
            return (
                < div className = "wrap" >
                    <div style={{textAlign:'center'}}>
                        <Link to="/qa/new" className="ui button primary">
                            質問する
                        </Link>
                    </div>
                    <QuestionList/>
                </div>
            );
        }
    }


export default connect(null)(TopPage);