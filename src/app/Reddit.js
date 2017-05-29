import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';

class Reddit extends Component {
    constructor() {
        super();

        this.state = {
            posts: [],
            loading: true
        }
    }

    componentDidMount() {
        fetch('https://www.reddit.com/.json', {
            Accept: 'application/json'
        })
        .then(res => res.json())
        .then(data => {
            this.setState({posts: data.data.children, loading: false});
        });
    }

    render() {
        return (
            <View>
                <Text>Reddit API</Text>
                {this.state.loading && <Text>Loading...</Text>}
                <View>
                    {this.state.posts.map((post, i) => (
                        <Text key={i}>{post.data.author}</Text>
                    ))}
                </View>
            </View>
        )
    }
}

export default Reddit;
