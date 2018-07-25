import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';
import App from './App';
import todos from './todos';
import './../scss/main.scss';




App.propTypes = {
    title: PropTypes.string,
    initialData: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        completed: PropTypes.bool.isRequired
    })).isRequired
};
App.defaultProps = {
    title: "React Todo"
}

render(<App initialData={todos} title="React Todo"/>, document.getElementById('root'));




