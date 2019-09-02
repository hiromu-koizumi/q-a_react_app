import React from 'react'
import { connect } from 'react-redux';


const Pagination = ({postsPerPage, totalPosts, paginate, currentPageNumber}) => {
    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i);
    }
    return (
        <div className="content">
            <div className="ui pagination menu">
                {pageNumbers.map(number => (
                        <a onClick={() => paginate(number)} className={[
                            'item',
                             currentPageNumber === number ? 'active' : ''
                          ].join(' ')} key={number} href='/#'>
                            {number}
                        </a>
                ))}
            </div>
        </div>
    )
}

const mapStateToProps = (state) =>{        
    return { 
        page: state.page.currentPageNumber
    };
}


export default connect(mapStateToProps)(Pagination);
