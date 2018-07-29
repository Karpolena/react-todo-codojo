import React from 'react';
import PropTypes from 'prop-types';
import Stats from './stats';
import Stopwatch from './stopwatch';

function Header(props) {
    return (        
        <header className="header main__item">
            <Stats todos={props.todos}/>
            <h1>{props.title}</h1>
            <Stopwatch />
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    todos: PropTypes.array.isRequired
}

export default Header;