import React from 'react'
import { connect } from 'react-redux';
import ResponseButton from './ResponseButton';

const ResponseList = ({questionId,answerId,response}) => {
    if(!response){
      return <div>Loading</div>;
    }
    return (
        < div className = "wrap" >
            {/* propsにするかstateにするかで表示変わる。propsにすると */}
            {response.map((item, i) => (
                <div className="ui fluid card" key={i}>
                    <div className="content">
                        <div className="meta">{item.name}</div>
                        <div className="description">
                            <p>{item.response}</p>
                        </div>
                        <ResponseButton questionId={questionId} answerId={answerId}/>
                    </div>
                </div>
            ))
            }
        </div>
    );
}

const mapStateToProps = (state,ownProps) =>{  

    return { 
        response: state.response[ownProps.answerId],
    };
}

export default connect(mapStateToProps)(ResponseList)