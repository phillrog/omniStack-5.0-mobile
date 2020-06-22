import React, { Component } from 'react';

import { View, FlatList, StyleSheet } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { TouchableOpacity } from 'react-native-gesture-handler';

import  Tweet from '../components/Tweet';

import api from '../services/tweets';

import socket from 'socket.io-client';

export default class Timeline extends Component {
    state = {
        tweets : []
    };

    async componentDidMount() {
        this.subscribeToEvents();
        
        const response = await api.get(api.endpoints.tweets); 
        this.setState({ tweets: response.data });
    }

    subscribeToEvents = () => {
        const io = socket(`https://omnistack5-api.herokuapp.com`);
    
        io.on('tweet', data => {
          let tweets = this.state.tweets.map(
            tweet => (tweet._id === data._id) ? data : tweet)
          
          const idx = tweets.findIndex(e => e._id === data._id);
    
          if (idx < 0) tweets.unshift(data);
    
          this.setState({tweets: [...tweets ]})
        });
    
        io.on('like', data => {
          this.setState({
            tweets: this.state.tweets.map(
              tweet => (tweet._id === data._id) ? data : tweet)
          })
        });
      }

    render() {
        const { navigation  } = this.props;

        navigation.setOptions({ title: "Início",
            headerRight: () => (
                <TouchableOpacity onPress={() => navigation.navigate('AppNew')}>
                    <Icon 
                        style={{ marginRight: 20}}
                        name="add-circle-outline"
                        size={32}
                        color="#4BB0EE" />
                </TouchableOpacity>
        ) });
  
        
            return <View  style={styles.container}>
                <FlatList
                    data={this.state.tweets}
                    keyExtractor={ tweet => tweet._id }
                    renderItem={({ item }) => <Tweet tweet={item} ></Tweet>}
                ></FlatList>
            </View> 
    }
i0pçoi}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });