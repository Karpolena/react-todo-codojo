import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.refs.title.value;

        if (title) {
            this.props.onAdd(title);
            this.refs.title.value = '';
        }
        
    }

    render() {
        return(
            <form className="todo-form" onSubmit={this.handleSubmit.bind(this)}>
                <input type="text" ref="title" placeholder="Что нужно сделать?" />
                <Button type="submit">Добавить</Button>
            </form>
        )

    }
}
Form.propTypes = {
onAdd: PropTypes.func.isRequired
}

export default Form;