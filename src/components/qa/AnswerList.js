import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchAnswers} from '../../actions';
import {Link} from 'react-router-dom';


//質問の表示処理
class AnswerList extends Component{
    
    componentDidMount() {
        this.props.fetchAnswers(this.props.id);
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
                                <Link to={`/qa/${item.id}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.name}</div>
                                <div className="description">
                                    <p>{item.question}</p>
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
        console.log(state)
        if (!state.data.answer){
            return　{
                nodata:state
            }
        }
        return { 
            data: Object.values(state.data.answer),
        };
    }

export default connect(mapStateToProps,{fetchAnswers})(AnswerList);