import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage';
import SearchScreen from '../screens/SearchScreen';




const Stack = createNativeStackNavigator();

function HomePageNav() {
  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      tabBarShowLabel: false
      }}
      >
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Search" component={SearchScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default HomePageNav;