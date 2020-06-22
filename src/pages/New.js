import React, { Component } from 'react';

import { SafeAreaView, View, Text, StyleSheet, TouchableOpacity, TextInput, } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

import AsyncStorage from '@react-native-community/async-storage';

import api from '../services/tweets';

export default class New extends Component {
    state = {
        newTweet: ''
    };

    goBack = () => {
        this.props.navigation.pop();
    }

    handleTweet = async () => {
        const content = this.state.newTweet;
        const author = await AsyncStorage.getItem('@OmniStack:userName');

        await api.post(api.endpoints.tweets, { author, content });

        this.goBack();
        
    }

    handleInputChange = (newTweet) => {
        this.setState({newTweet})
    }

    render() {
        const { navigation  } = this.props;

        navigation.setOptions({ header: () => null,});

        return (
        <SafeAreaView style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity
                    onPress={this.goBack}
                >
                    <Icon name="close" size={24} color="#4BB0EE"></Icon>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.handleTweet}
                >
                    <Text style={styles.buttonText}>Tweetar</Text>
                </TouchableOpacity>

            </View>
            <TextInput
                style={styles.input}
                multiline
                placeholder="O que está acontecendo ?"
                placeholderTextColor="#999"
                value={this.state.newTweet}
                onChangeText={this.handleInputChange}
                returnKeyType="send"
                onSubmitEditing={this.handleTweet}
            ></TextInput>
        </SafeAreaView>
        );
    }
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    },
  
    header: {
      paddingTop: 10,
      paddingHorizontal: 20,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center"
    },
  
    button: {
      height: 32,
      paddingHorizontal: 20,
      borderRadius: 16,
      backgroundColor: "#4BB0EE",
      justifyContent: "center",
      alignItems: "center"
    },
  
    buttonText: {
      color: "#FFF",
      fontSize: 16,
      fontWeight: "bold"
    },
  
    input: {
      margin: 20,
      fontSize: 16,
      color: "#333"
    }
  });