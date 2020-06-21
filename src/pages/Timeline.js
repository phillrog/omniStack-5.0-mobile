import React, { Component } from 'react';

import { View, Text, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import api from '../services/tweets';

export default class Timeline extends Component {
    state = {
        tweets : []
    };

    async componentDidMount() {
        const response = await api.get(api.endpoints.tweets); 
        this.setState({ tweets: response.data });
    }

    render() {
        const { navigation  } = this.props;

        navigation.setOptions({ title: "Início",
            headerRight: () => (
                <TouchableOpacity onPress={() => {}}>
                    <Icon 
                        style={{ marginRight: 20}}
                        name="add-circle-outline"
                        size={32}
                        color="#4BB0EE" />
                </TouchableOpacity>
        ) });
  
        
            return <View >{this.state.tweets.map(tweet =>(<Text>{tweet.author}</Text>))}</View> 
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });