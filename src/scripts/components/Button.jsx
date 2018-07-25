import React from 'react';
import PropTypes from 'prop-types';

function Button(props) {
    return (
        <button className={props.className}>
            <i className="material-icons">{props.icon}</i>
        </button>

    );
}
Button.proptypes = {
    icon: PropTypes.string,
    className: PropTypes.string
}

export default Button;