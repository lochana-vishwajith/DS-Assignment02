import React from 'react';
import PropTypes from 'prop-types';

const textView = ({
    label,
    id,
    className,
}) => {
    return(
        <div className ="textView">
            <p id = {id} className={className}>{label}</p>
        </div>
    )
}

textView.propTypes = {
    label : PropTypes.string.isRequired,
    id : PropTypes.string.isRequired,
    className : PropTypes.string.isRequired
}

export default textView;