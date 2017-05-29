import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';
import { connect } from 'react-redux';
import { ADD_POST } from './reducers';

const _Reddit = (props) => {
    return (
        <View>
            {props.posts.map((post, i) => (
                <Text key={i}>{post.name}</Text>
            ))}
            <TouchableOpacity onPress={() => props.addRedditPost()}>
                <Text>Add</Text>
            </TouchableOpacity>
        </View>
    );
}

const mapStateToProps = (state) => {
    return {
        posts: state.reddit
    };
};

const mapActionsToProps = (dispatch) => ({
    addRedditPost(post = {name: 'new state'}) {
        dispatch({
            type: ADD_POST,
            payload: post
        });
    }
});

export default Reddit = connect(mapStateToProps, mapActionsToProps)(_Reddit);
