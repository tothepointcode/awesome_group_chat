import React from 'react';

// UI
import { View } from 'react-native';

// React nav
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//Screens
import Welcome from './../screens/Welcome';
import Create from './../screens/Create';


const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{
            headerShown: false
        }} name="Welcome" component={Welcome} />
        <Stack.Screen options={{
        }} name="Create" component={Create} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
