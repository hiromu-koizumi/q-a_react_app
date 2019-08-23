import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../../actions';
import {Link} from 'react-router-dom';


//質問の表示処理
class Item extends Component{
    
    componentDidMount() {
        this.props.fetchPosts();
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
                                <Link to={`/qa/${item.id}`} className="header">
                                {item.title}
                                </Link>
                                <div className="meta">{item.user}</div>
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
        return { 
            data: Object.values(state.data.post),
        };
    }

export default connect(mapStateToProps,{fetchPosts})(Item);