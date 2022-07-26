import React from "react";
import { StyleSheet, TextInput, View, Keyboard, Button, Pressable, Text} from "react-native";
import { Feather, Entypo, AntDesign, Ionicons,  } from "@expo/vector-icons";


 const SearchBar = (props) => {
  return (
    <View style={[styles.container, { backgroundColor: '#0a0a0a', paddingLeft: 0,}]}>
      <View style={styles.container}>
      {props.clicked && (
          <Feather name="arrow-left" size={25} color="white" style={{ padding: 1, 
          }} onPress={() => {
            Keyboard.dismiss();
            props.setClicked(false);
          }}/>
        )}
      <View
        style={
          !props.clicked
            ? styles.searchBar__unclicked
            : styles.searchBar__clicked
        }
      >
        
       
        <TextInput
          style={styles.input}
          placeholder="Search"
          placeholderTextColor={"#FFFFFF"}
          value={props.searchPhrase}
          onChangeText={props.setSearchPhrase}
          onFocus={() => {
            props.setClicked(true);
          }}
        />
        </View>
        {props.clicked && (
           <View style={{ alignItems: 'center', marginHorizontal: 3, borderRadius: 3,
           justifyContent: 'center', backgroundColor: '#FFFFFF40', }}>
          <Ionicons name="backspace-outline" size={25} color="white" style={{ padding: 1, 
          }} onPress={() => {
              props.setSearchPhrase("")
          }}/>
          </View>
        )}
      </View>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    margin: 0,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#353736",
    
    paddingLeft: 5,
    
  },
  searchBar__unclicked: {
    
    paddingVertical: 10,
    flexDirection: "row",
    width: "100%",
    backgroundColor: '#353736',
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    
    
  },
  searchBar__clicked: {
    padding: 15,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#353736",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    fontSize: 18,
    marginLeft: 10,
    width: "90%",
    color: "white",
    paddingLeft: 3,
  },
  cancelbtn: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 10,
    padding: 2,
  },
});