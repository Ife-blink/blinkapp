import React,{useEffect} from 'react'
import { StyleSheet,  Pressable, TextInput, Text, View } from "react-native";
import { useFonts } from 'expo-font';



export default function SignupPassword({values, handleChange}) {

  /*const [loaded] = useFonts({
    'DMSans-Black': require('./assets/fonts/DMSans-Bold.ttf'),
    'DMSans-Med': require('./assets/fonts/DMSans-Medium.ttf'),
    'DMSans-Regu': require('./assets/fonts/DMSans-Regular.ttf'),
   
  });
  
  if (!loaded) {
    return null;
  }*/

  const {email, firstName, lastName, password} = values

  useEffect( () => {
    firebase.firestore().collection("multiFormData").doc().set({
      fname:firstName,
      lname:lastName,
      email:email,
      password:password
    }).then( (data) =>
      console.log(data)
    ).catch( (err) =>
      console.log(err)
    )
  },[])

  const handleSignUp = () => {
    auth
      .createUserWithEmailAndPassword(email, password)
      .then(userCredentials => {
        const user = userCredentials.user;
        console.log('Registered with:', user.email);
      })
      .catch(error => alert(error.message))
  }



const Button = (props) => {
  return (
    <View>
     <Pressable style={props.style} onPress={props.onPress}>
        <Text  style={props.textstyle} >{props.title}</Text>
       </Pressable>
    </View>
  );
}

  return (
  <View style={styles.container}>
    
    <View style={styles.container1}>
    <View style={styles.inputcontainer}>
      
    <Text style={styles.h1text}>Create a password</Text>
      <TextInput
      style={styles.input}
      placeholder="Password"
      textColor="#FFFFFF90"
      defaultValue={values.password}
      onChange={handleChange('password')}
      />
      </View>
      

      <Button style={[styles.button2, styles.white]} textstyle={styles.blacktext} title="Next"
      onPress={handleSignUp}
      />
      </View>
  </View>
);
  }


const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    
    padding: 20,
    backgroundColor: '#0A0A0A',
  },
  input: {
    margin: 0,
   
    height: 50,
    padding: 10,
    fontSize: 16,
    backgroundColor: "#353736",
    borderRadius: 5,
    color: "white",
    //fontFamily: 'DMSans-Regu',
    marginTop: 0,
  },
  container1: {
   paddingTop: "20%",
   
  },
  button2: {
    backgroundColor: "",
      height: 50,
      width: '30%',
      borderRadius: 40,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 20,
      alignSelf: 'center',
      
  },
  blacktext: {
    color: "#000000",
   // fontFamily: 'DMSans-Regu',
    fontSize: 18,
   },
  white: {
    backgroundColor: "#FFFFFF",
   },
  inputcontainer:{
   height: 90,
   justifyContent: "space-between",
   marginTop: 15,
  },
  h1text: {
    color: "white",
   // fontFamily: 'DMSans-Black',
    fontSize: 22,
  },
});