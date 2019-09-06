import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestions,questionGoodCount} from '../../actions';
import {Link} from 'react-router-dom';
import GoodButton from '../../components/qa/good_button/GoodButton';
import './style.scss'



//質問の表示処理
class Item extends Component{
    
    componentDidMount() {
        this.props.fetchQuestions();
    }

    onClick = (questionData) => {
        this.props.questionGoodCount(questionData);     
    }

    render() {
            return (
                < div className = "ui container nav" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.questionId}`} className="header">
                                {item.question}
                                </Link>
                                <div className="reaction-wrap">
                                <GoodButton onClick={this.onClick} postData={item}/>
                                <div className="comment-icon">
                                    <p><i className="icon comment outline"></i>{item.answerCount}</p>
                                </div>
                                </div>
                            </div>
                        </div>
                    ))
                    }
                </div>
            );
        }
    }

    const mapStateToProps = (state) =>{        
        return { 
            data: Object.values(state.questions),
        };
    }

export default connect(mapStateToProps,{fetchQuestions,questionGoodCount})(Item);