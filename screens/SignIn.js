import { StatusBar } from 'expo-status-bar';
import React, {useState, useEffect} from 'react';
import { StyleSheet, Pressable, TextInput, Text, View, TouchableOpacity,SafeAreaView } from 'react-native';
import { useFonts } from 'expo-font';
import { useNavigation } from '@react-navigation/core'
import { auth } from '../firebase'

export default function SignIn2() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const navigation = useNavigation()

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.replace("Home")
      }
    })

    return unsubscribe
  }, [])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    auth
      .signInWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Logged in with:', user.email);
      })
      .catch(error => alert(error.message))
  }

// loaded fonts from the assets directory
/*const [loaded] = useFonts({
  'DMSans-Black': require('./assets/fonts/DMSans-Bold.ttf'),
  'DMSans-Med': require('./assets/fonts/DMSans-Medium.ttf'),
  'DMSans-Regu': require('./assets/fonts/DMSans-Regular.ttf'),
 
});

if (!loaded) {
  return null;
}*/

// reusable button component
const Button = (props) => {
  return (
    <View>
     <Pressable style={props.style}>
        <Text  style={props.textstyle} >{props.title}</Text>
       </Pressable>
    </View>
  );
}

  return (
    <SafeAreaView>
    <View style={styles.container}>
    <View style={styles.container1} ></View>
    <View style={styles.container2}>
    <Text style={styles.h1text}>Sign up</Text>
    <Text style={styles.paragraph}>Young people use blink for a seamlesss reading experience</Text>
    </View>
    <View style={styles.container3}>
      <TextInput style={styles.input} 
      placeholder="Email or phone number"
      placeholderTextColor="#FFFFFF90"
      value={email}
      onChangeText={text => setEmail(text)}
      />
      <TextInput style={styles.input}
      placeholder="Password"
      placeholderTextColor="#FFFFFF90"
      secureTextEntry={true}
      value={password}
      onChangeText={text => setPassword(text)}
      ></TextInput>
      
      <TouchableOpacity /*pass in style and title props*/ 
      textstyle={[styles.buttontext, {color: '#05192D'}]}
      onPress={handleSignUp}
      style={[styles.button, {backgroundColor: "#03F363",}]}>
        <Text>Sign up</Text>
        </TouchableOpacity>
    </View>
    <View style={styles.container4}>
    <TouchableOpacity /*pass in style and title props*/ 
    textstyle={[styles.buttontext, {color: 'white',}]}
    onPress={handleLogin}
     style={[styles.button, {backgroundColor: "#386FFF",}]}>
       <Text>Log in</Text>
    </TouchableOpacity>
    <Button /*pass in style and title props*/ title="Sign up" 
    textstyle={[styles.buttontext, {backgroundColor: "#FFFFFF",}]}
    style={[styles.button,{backgroundColor: "#FFFFFF",}]}/>
    </View>
    <StatusBar style="auto" />
  </View>
  </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: '#05192D',
    padding: 20,
    justifyContent: 'space-between',
  },
    // controls the layout of h1 and paragraph
    container2: {
      width: "100%",
      paddingTop: '15%',
      justifyContent: "center",
      
     },
     //controls the google and apple auth buttons
     container4: {
      height: 200,
      justifyContent: "flex-end",
      
      
     },
    
     // controls the icon
     container1: {
      justifyContent: "center",
      
     },
     //default buttons styles
     button: {
      backgroundColor: "",
      height: 50,
      borderRadius: 5,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
     },
     //text inside of button
     buttontext: {
      
      //fontFamily: 'DMSans-Regu',
      fontSize: 18,
     },
     //styling colors
    blacktext: {
      color: "#000000",
      //fontFamily: 'DMSans-Regu',
      fontSize: 18,
     },

     whitetext: {
      color: "#FFFFFF",
      //fontFamily: 'DMSans-Regu',
      fontSize: 18,
     },
     black: {
      backgroundColor: "#000000",
      color: "#000000"
     },
     //input forms
      input: {
        margin: 0,
       
        height: 50,
        padding: 10,
        fontSize: 16,
        backgroundColor: "#35373650",
        borderRadius: 5,
        color: "white",
        //fontFamily: 'DMSans-Regu',
        marginTop: 13,
      },
      // controls the input forms
      container3: {
        width: "100%",
        alignItems: 'stretch',
        
       
      },
      h1text: {
        color: "white",
        //fontFamily: 'DMSans-Black',
        fontSize: 28,
      },
      paragraph: {
        color: "#FFFFFF60",
        //fontFamily: 'DMSans-Regu',
        fontWeight: "normal",
        fontSize: 16,
        marginTop: 3,
       
      },
});