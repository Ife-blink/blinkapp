import HomePage from './screens/HomePage';
import Explore from './screens/Explore';
import Profile from './screens/profile';

import { View, Text, StyleSheet, SafeAreaView, } from 'react-native'
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { AntDesign, Ionicons, MaterialIcons } from '@expo/vector-icons';


const Tab = createBottomTabNavigator();


const For_you =()=>{
  return(
    <View style={{flex: 1,}}><Profile /></View>
  )
}

const Home =()=>{
  return(
    <View style={{flex: 1,}}><HomePage /></View>
  )
}

const ExplorePage =()=>{
  return(
    <View style={{flex: 1,}}><Explore /></View>
  )
}

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <SafeAreaView style={{flex: 1,}}>
    <NavigationContainer independent={true}>
      <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: { backgroundColor: '#0A0A0A', color: 'FFFFFF', },
        tabBarLabelStyle: { fontSize: 12, color: '#FFFFFF', },
        tabBarIndicatorStyle: {backgroundColor: '#FFFFFF',},
        headerShown: false,
        tabBarShowLabel: false
      }}
      
      >
      <Tab.Screen name="Home" component={Home}
      //For the Icons
      options={{
        tabBarIcon: ({ color, size }) => (
          <AntDesign name="home" color={color} size={size} />)
      }}
      />
      <Tab.Screen name="Explore" component={ExplorePage}
      options={{
        tabBarIcon: ({ color, size }) => (
          //<AntDesign name="search1" color={color} size={size} />)
          <MaterialIcons name="explore" size={24} color="white" />)
          ,
      }}
      />
      <Tab.Screen name="For-you" component={For_you}
      options={{
        tabBarIcon: ({ color, size }) => (
          <Ionicons name="person-circle-outline" size={size} color="white" />)
      }}
       />
      
    </Tab.Navigator>
    </NavigationContainer>
    </SafeAreaView>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    
    
  }
})