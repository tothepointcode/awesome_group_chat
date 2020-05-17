import React from 'react';

// UI
import { View } from 'react-native';

// React nav
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Welcome from './../screens/Welcome';
import Create from './../screens/Create';
import Details from './../screens/Details';
import Acknowledgement from './../screens/Acknowledgement';


import { colors } from './../style';

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerTintColor: colors.white,
          headerLeftContainerStyle: {
              paddingLeft: 16
          }
        }}
      >
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{
            title: 'New Group',
            headerTransparent: true
          }}
          name="Create"
          component={Create}
        />
        <Stack.Screen
          options={{
            title: 'New Group',
            headerTransparent: true
          }}
          name="Details"
          component={Details}
        />
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Acknowledgement"
          component={Acknowledgement}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
