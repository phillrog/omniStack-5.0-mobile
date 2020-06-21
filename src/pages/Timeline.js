import React, { Component } from 'react';

import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';


function Timeline (props)  {
    const { navigation, route  } = props;

        React.useLayoutEffect(() => {
            navigation.setOptions({ 

                title: "Início",
                headerRight: () => (
                    <TouchableOpacity onPress={() => {}}>
                        <Icon 
                            style={{ marginRight: 20}}
                            name="add-circle-outline"
                            size={32}
                            color="#4BB0EE" />
                    </TouchableOpacity>
                )
             });
          }, [navigation, route]);
      
        return (<View ><Text>SOU A TIMELINE</Text></View> );
    
}



const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#FFF"
    }
  });

  export default Timeline;