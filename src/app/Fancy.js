import React, { Component } from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions
 } from 'react-native';

const { width, height } = Dimensions.get('window');

export default class Fancy extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.box} />
                <Text style={[styles.text, styles.text2]}>Nice to meet you</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 18
    },
    text2: {
        fontSize: 22
    },
    box: {
        backgroundColor: 'yellow',
        width: width / 2,
        height: height /3,
        position: 'absolute',
        left: 20,
        top: 20,
        borderRadius: 30
    }
});
