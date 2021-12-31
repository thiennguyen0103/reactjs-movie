import React from 'react';
import bgFooter from '../../assets/img/footer-bg.jpg';
import './PageHeader.scss'

const PageHeader = props => {
    return (
        <div className='page-header' style={{background: `url(${bgFooter})`}}>
            <h2>{props.children}</h2>
        </div>
    )
}

export default PageHeader
