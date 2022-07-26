import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';


const Stack = createStackNavigator();

export const AppStack = () => {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false
    }}
    >
      <Stack.Screen name='Home' component={HomeScreen} />
    </Stack.Navigator>
  );
};
