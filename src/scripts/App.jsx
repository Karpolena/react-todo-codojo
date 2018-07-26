import React, {Component} from 'react';
import Header from './components/Header';
import Todo from './components/Todo';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };
    }
    handleStatusChange(id) {
        console.log('handleStatusChange',id);
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.completed = !todo.completed;
            }
            return todo;
        });
        this.setState({ todos});

    }
    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }
    render(){
        return(
            <main className="main">
            <Header title={this.props.title} todos={this.state.todos} />
            <section className="todo-list main__item">
                {this.state.todos.map(todo =>
                    <Todo 
                    key={todo.id} 
                    id={todo.id}
                    title={todo.title} 
                    completed={todo.completed} 
                    onStatusChange={this.handleStatusChange.bind(this)}
                    onDelete={this.handleDelete.bind(this)}/>)
                }
            </section>
        </main>
        );
    }
}

 




export default App;