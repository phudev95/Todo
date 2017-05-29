import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    StyleSheet
 } from 'react-native';

export default class Todo extends Component {
    constructor() {
        super();

        this.state = {
            todos: [],
            newTodo: ''
        };
    }

    handleChange(text) {
        this.setState({
            newTodo: text
        });
    }

    handlePress() {
        const newTodo = this.state.newTodo.trim();

        if (newTodo !== '') {
            const todos = [...this.state.todos, this.state.newTodo];
            this.setState({
                todos,
                newTodo: ''
            });
        }
    }

    render() {
        return (
            <View style={styles.container}>
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
                <View style={styles.todos}>
                    {this.state.todos.map((todo, i) => (
                        <View style={styles.todo}>
                            <Text style={styles.todoText} key={i}>{todo}</Text>
                        </View>
                    ))}
                </View>
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
        marginTop: 60
    },
    todo: {
        marginBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
    },
    todoText: {
        fontSize: 24
    }
});
