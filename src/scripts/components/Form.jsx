import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        };
    }

    handleSubmit(event) {
        event.preventDefault();
        let title = this.state.title;

        if (title) {
            this.props.onAdd(title);
            this.setState({ title: '' });
        }
        
    }

    handleChange(event) {
        let title = event.target.value;
        this.setState({ title });

    }

    render() {
        return(
            <form className="todo-form" onSubmit={this.handleSubmit.bind(this)}>
                <input 
                type="text" 
                value={this.state.title} 
                placeholder="Что нужно сделать?" 
                onChange={this.handleChange.bind(this)} />
                <Button type="submit">Добавить</Button>
            </form>
        )

    }
}
Form.propTypes = {
onAdd: PropTypes.func.isRequired
}

export default Form;