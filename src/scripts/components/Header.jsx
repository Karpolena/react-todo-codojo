import React from 'react';
import PropTypes from 'prop-types';

function Header(props) {
    return (
        <header className="header main__item">
            <h1>{props.title}</h1>
        </header>
    );
}



export default Header;