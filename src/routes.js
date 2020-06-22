import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { 
    View, 
    StyleSheet, 
    TouchableOpacity
 } from 'react-native';

 import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();

import Login from './pages/Login';
import Timeline from './pages/Timeline';
import New from './pages/New';

function Routes() {
    return (
      <NavigationContainer options={{backgroundColor: "green"}}>
        <Stack.Navigator initialRouteName='Login'
          screenOptions={{
            gestureEnabled: false,
            title: "Omni Stack 5.0",
            headerLeft: null,
            headerTitleAlign: "center",          
          }}>
          <Stack.Screen 
            name='Login' 
            component={Login} 
            options={{
              headerStyle: ({ backgroundColor: "#fff"}),
              headerTintColor: "#008abe",
              
            }}
          />
        <Stack.Screen 
            name='App' 
            component={Timeline}
            options={{
                headerStyle: ({ backgroundColor: "#fff"}),
                headerTintColor: "#008abe",                
              }}
            />
          <Stack.Screen 
            name='AppNew' 
            component={New}
            options={{
                
                headerStyle: ({ backgroundColor: "#fff"}),
                headerTintColor: "#008abe",                
              }}
            />
         </Stack.Navigator>
    </NavigationContainer>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 24,
    color: "#FFF",
    letterSpacing: 1,
  },
  icon: {
    marginLeft: 10
  },
  headerColor: {
      color: "#008abe"
  }
});

 export default Routes;