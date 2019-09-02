import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestions,questionGoodCount} from '../../actions';
import {Link} from 'react-router-dom';
import GoodButton from './GoodButton';


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
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.currentPosts.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.questionId}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.name}</div>
                                <div className="description">
                                    <p>{item.question}</p>
                                </div>
                                <div className="description">
                                    <p>回答数{item.answerCount}</p>
                                </div>
                                <GoodButton onClick={this.onClick} postData={item}/>
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