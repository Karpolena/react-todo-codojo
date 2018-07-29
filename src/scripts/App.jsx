import React, {Component} from 'react';
import Header from './components/Header';
import Todo from './components/Todo';
import Form from './components/Form';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todos: this.props.initialData
        };

    }
    componentWillMount() {

    }

    componentDidMount() {
        
    }

    nextId() {
        // this._nextId = this._next || 4;
         this._nextId = JSON.stringify(Math.random() * (100000 - 100) + 100);
        return this._nextId++;
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
    handleAdd(title) {
        let todo = {
            id: this.nextId(),
            title,
            completed: false
        }
        let todos = [...this.state.todos, todo];
        this.setState({todos});
    }
    handleDelete(id) {
        let todos = this.state.todos.filter(todo => todo.id !== id);

        this.setState({ todos });
    }

    handleEdit(id, title) {
        let todos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.title = title;                
            }
            return todo;
        });
        this.setState({ todos });
    }
    render(){
        return(
            <main className="main">
            <Header title={this.props.title} todos={this.state.todos} />
            <section className="todo-list">
                {this.state.todos.map(todo =>
                    <Todo 
                    key={todo.id} 
                    id={todo.id}
                    title={todo.title} 
                    completed={todo.completed} 
                    onStatusChange={this.handleStatusChange.bind(this)}
                    onDelete={this.handleDelete.bind(this)}
                    onEdit={this.handleEdit.bind(this)}
                    />)
                    
                }
            </section>
            <Form onAdd={this.handleAdd.bind(this)}/>
        </main>
        );
    }
}

 




export default App;