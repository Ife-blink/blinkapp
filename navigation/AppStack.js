import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../Home';
import Search from '../screens/Search';

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
      <Stack.Screen name='Search' component={Search} />
    </Stack.Navigator>
  );
};
