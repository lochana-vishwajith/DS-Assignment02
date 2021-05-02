import React from 'react';
import PropTypes from 'prop-types';

const buttonCom = ({
    id,
    value,
    classname,
    type
}) => {
    return(
        <button type={type} className={classname} id= {id}>{value}</button>
    )
}

buttonCom.prototype = {
    id : PropTypes.string.isRequired,
    value : PropTypes.string.isRequired,
    classname : PropTypes.string.isRequired,
    type : PropTypes.string.isRequired
}

export default buttonCom;