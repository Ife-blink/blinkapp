import List from '../components/List';
import SearchBar from '../components/SearchBar';
import { AntDesign } from '@expo/vector-icons'; 
import React, {Component, useState, useEffect} from 'react'
import { useFonts } from 'expo-font';
import { View, Text, StyleSheet, SafeAreaView, StatusBar } from 'react-native';
import { Colors } from '../config';



export default function SearchScreen() {

    const [searchPhrase, setSearchPhrase] = useState("");
    const [clicked, setClicked] = useState(false);
    const [fakeData, setFakeData] = useState();
  
    // get data from the fake api
    useEffect(() => {
      const getData = async () => {
        const apiResponse = await fetch(
          "https://my-json-server.typicode.com/kevintomas1995/logRocket_searchBar/languages"
        );
        const data = await apiResponse.json();
        setFakeData(data);
      };
      getData();
    }, []);

 const Recent = () => {
        return (
          <List
          searchPhrase={searchPhrase}
          data={fakeData}
          setClicked={setClicked}
        /> 
        )
      }
 const Header = () =>{
        return(
          <View style={{alignItems: 'center', justifyContent: 'center', marginVertical: 5,}}>
            <Text style={{color: 'white', fontSize: 30,}}> Search</Text>
          </View>
        )
      }

return(
  <SafeAreaView style={{flex: 1, paddingTop: StatusBar.currentHeight, backgroundColor: Colors.deepgreen}}>
    <View style={{flex: 1, backgroundColor: Colors.deepgreen }}>
        {!clicked && <Header />}
   <View style={{flex: 1, position: 'relative', zIndex: 100,}}>
      <SearchBar
        searchPhrase={searchPhrase}
        setSearchPhrase={setSearchPhrase}
        clicked={clicked}
        setClicked={setClicked}
      />
      {clicked && <Recent />}
      </View>
      </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({


})
