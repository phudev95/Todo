import React, { Component } from 'react';
import { AppRegistry, StyleSheet } from 'react-native';
import Todo from './src/app/Todo'

const Main = () => (<Todo />);


// export default class Main extends Component {
//     constructor() {
//         super();
//
//         this.state = {
//             todos: [1,2,3],
//             newTodo: ''
//         };
//     }
//
//     handleChange(e) {
//         const { text } = e.nativeEvent;
//         this.setState({newTodo: text});
//     }
//
//     handlePress() {
//         const todos = [...this.state.todos, this.state.newTodo];
//         this.setState({
//             todos,
//             newTodo: ''
//         });
//     }
//
// 	render() {
// 		return (
// 			<View style={styles.container}>
//                 <Todotest />
//                 <TextInput onChange={this.handleChange.bind(this)} value={this.state.newTodo}/>
//                 <TouchableHighlight onPress={this.handlePress.bind(this)}>
//                     <Text>tap me</Text>
//                 </TouchableHighlight>
//                 <Text>Debug: {this.state.newTodo}</Text>
//                 {this.state.todos.map((todo, i) => <Text key={i}>{todo}</Text>)}
//             </View>
// 		);
// 	}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	welcome: {
		fontSize: 20,
		textAlign: 'center',
		margin: 10,
	},
	instructions: {
		textAlign: 'center',
		color: '#333333',
		marginBottom: 5,
	},
});

AppRegistry.registerComponent('Todo', () => Main);
