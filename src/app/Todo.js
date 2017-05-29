import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';
import Reddit from './Reddit'

export default class Todo extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: '',
            loading: true
        };
    }

    componentWillMount() {
        fetch('http://192.168.56.1:5000/todos',{
            'Accept': 'application/json'
        })
        .then(res => res.json())
        .then(todos => this.setState({
            todos,
            loading: false
        }));
    }

    handleChange(text) {
        this.setState({
            newTodo: text
        });
    }

    handlePress() {
        const newTodo = this.state.newTodo.trim();

        if (newTodo !== '') {
            fetch('http://192.168.56.1:5000/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: newTodo
                })
            })
            .then(res => res.json())
            .then(todo => this.setState({
                todos: [todo, ...this.state.todos],
                newTodo: ''
            }));
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Reddit />
                <View style={styles.form}>
                    <TextInput
                        style={styles.input}
                        value={this.state.newTodo}
                        onChangeText={this.handleChange.bind(this)}
                        onSubmitEditing={this.handlePress.bind(this)}
                    />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={this.handlePress.bind(this)}>
                        <Text style={styles.buttonText}>make</Text>
                    </TouchableOpacity>
                </View>

                {
                    this.state.loading && <View style={styles.loading}>
                        <Text>Loading...</Text>
                    </View>
                }

                {
                    !this.state.loading && <View style={styles.todos}>
                        {this.state.todos.map((todo, i) => (
                            <View style={styles.todo} key={i}>
                                <Text style={styles.todoText}>{todo.name}</Text>
                            </View>
                        ))}
                    </View>
                }
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20
    },
    form: {
        flexDirection: 'row'
    },
    input: {
        flex: 0.7
    },
    button: {
        flex: 0.3,
        borderWidth: 1,
        height: 50,
        borderColor: 'blue',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 3
    },
    buttonText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    todos: {
        marginTop: 30
    },
    todo: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    todoText: {
        fontSize: 24
    },
    loading: {
        marginTop: 25
    }
});
