import React, { Component } from 'react';
import { connect } from 'react-redux';
import {fetchPosts} from '../../actions'


//質問の表示処理
class Item extends Component{
    
    componentDidMount() {
        this.props.fetchPosts();
    }

    render() {
            return (
                < div className = "wrap" >
                    {/* propsにするかstateにするかで表示変わる。propsにすると */}
                    {this.props.data.map((item, i) => (
                        <a className="ui fluid card" key={i}>
                            <div className="content">
                                <div className="header">{item.title}</div>
                                <div className="meta">{item.user}</div>
                                <div className="description">
                                    <p>{item.question}</p>
                                </div>
                            </div>
                        </a>
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