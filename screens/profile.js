import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons, Entypo } from '@expo/vector-icons';
import { signOut } from 'firebase/auth';

import { auth } from '../config';

const Profile = () => {
    const handleLogout = () => {
        signOut(auth).catch(error => console.log('Error logging out: ', error));
      };


  //Profile buttons like notifications and suggestions
  const Buttons = (props) => {
    return(
      <View style={styles.buttons}>
      <View>{props.icon}</View>
      <Text style={[styles.text, {paddingLeft: 10,}]}>{props.title}</Text>
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <View  style={styles.imagebox}>
       <View style={{height: 150, width: 150,
         backgroundColor: 'white', borderRadius: 10,}}></View>
      <TouchableOpacity style={{borderWidth: 3, borderRadius: 40, borderColor:'white', padding: 5,
    paddingHorizontal: 15, marginTop: 10}} >
        <Text style={styles.text}> Edit profile</Text>
      </TouchableOpacity>
     <Buttons title="Notifications"
     icon={<Ionicons name="notifications" size={24} color="white" />}
     />
      <Buttons title="Sugesstions"
     icon={<Entypo name="chat" size={24} color="white" />}
     />
      </View>
      <TouchableOpacity style={{marginHorizontal: 10, backgroundColor: '#ffffff',
      padding: 0, paddingHorizontal: 20, borderRadius: 5,
    }} onPress={handleLogout}>
        <Text style={[styles.text, {color: 'black', 
        paddingVertical: 10,
      }]}> Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
 container: {
  flex: 1,
  alignItems: 'center',
  justifyContent: "center",
  backgroundColor: '#0A0A0A',
 },
 imagebox: {
  flex: 1,
  alignItems: 'center',
  justifyContent: "center",
  backgroundColor: '#0A0A0A',
  width: '100%',
 },
 text: {
  color: 'white',
  fontSize: 25,
 },
 buttons: {
  alignItems: 'center',
  marginTop: 10,
  marginHorizontal: 10,
  backgroundColor: '#FFFFFF40',
  //borderWidth: 2,
  borderRadius: 5,
  //borderColor: 'white',
  flexDirection: 'row',
  width: '90%',
  padding: 5,
  paddingVertical: 10,
  paddingHorizontal: 20,
 },
})