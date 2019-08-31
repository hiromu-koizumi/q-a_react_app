import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAnswers,answerGoodCount} from '../../actions';
import { Link } from 'react-router-dom';
import GoodButton from './GoodButton';


//質問の表示処理
class AnswerList extends Component{
    
    componentDidMount() {
        this.props.fetchAnswers(this.props.id);
    }

    onClick = (questionData) => {
        this.props.answerGoodCount(questionData);       
    }

    render() {
        if (this.props.nodata){
            return(
                <div>回答なし</div>
            );
        }
            return (
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.questionId}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.name}</div>
                                <div className="description">
                                    <p>{item.answer}</p>
                                </div>
                                <GoodButton onClick={this.onClick} questionData={item}/>
                            </div>
                        </div>
                    ))
                    }
                </div>
            );
        }
    }

    const mapStateToProps = (state) =>{  
        console.log('AAA') 
        if (!state.answer){
            return　{
                nodata:state
            }
        }
        return { 
            data: Object.values(state.answer),
        };
    }

export default connect(mapStateToProps,{fetchAnswers,answerGoodCount})(AnswerList);