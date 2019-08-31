import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchQuestions,goodCount} from '../../actions';
import {Link} from 'react-router-dom';
import GoodButton from './GoodButton';


//質問の表示処理
class Item extends Component{
    
    componentDidMount() {
        this.props.fetchQuestions();
    }

    onClick = (questionData) => {
        this.props.goodCount(questionData);       
    }

    render() {
            return (
                < div className = "wrap" >
                    <div style={{textAlign:'center'}}>
                        <Link to="/qa/new" className="ui button primary">
                            質問する
                        </Link>

                    </div>
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <div className="ui fluid card" key={i}>
                            <div className="content">
                                <Link to={`/qa/${item.postId}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.name}</div>
                                <div className="description">
                                    <p>{item.question}</p>
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
        return { 
            data: Object.values(state.questions),
        };
    }

export default connect(mapStateToProps,{fetchQuestions,goodCount})(Item);