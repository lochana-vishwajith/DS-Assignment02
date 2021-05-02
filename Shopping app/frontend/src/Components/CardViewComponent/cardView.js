import React from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

const card = ({
    title,
    text,
    btnName,
    imgLoc,
    id,
    path
}) => {
    return(
        <div className="card">
            <img className="card-img-top" src={imgLoc} alt="Card image cap"/>
             <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <Link to= {path}  className="btn btn-danger">{btnName}</Link>
            </div>
        </div>
    )
}

card.propTypes ={
    title: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    btnName: PropTypes.string.isRequired,
    path : PropTypes.string.isRequired
}

export default card;