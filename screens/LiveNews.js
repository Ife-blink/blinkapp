import React from "react";
import { StyleSheet, Text, View, SafeAreaView, SectionList, StatusBar } from "react-native";
import { useFonts } from 'expo-font';


const DATA = [
  {
    title: "Live news",
    data: ["Pizza", "Burger", "Risotto","Pizza",
     "Burger", "Risotto","Pizza", "Burger", "Risotto","Pizza", "Burger", "Risotto"]
  },
 
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);



export default function LiveNews () {
  //fonts
 

return(

  <SafeAreaView style={styles.container}>
    <View>
    <SectionList
      sections={DATA}
      keyExtractor={(item, index) => item + index}
      renderItem={({ item }) => <Item title={item} />}
      renderSectionHeader={({ section: { title } }) => (
        <View style={{alignItems: 'center',}}>
        <Text style={styles.header}>{title}</Text>
        </View>
      )}
    />
    </View>
  </SafeAreaView>
);
      }
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
    paddingHorizontal: 10,
    backgroundColor: "#0A0A0A",
    
  },
  item: {
    backgroundColor: "#353736",
    padding: 25,
    marginVertical: 8,
    borderRadius: 5,
  },
  header: {
    fontSize: 28,
    backgroundColor: "#ffffff00",
    
    //fontFamily: 'DMSans-Med',
    color: '#FFFFFF',
    paddingBottom: 20,
    
  },
  title: {
    fontSize: 18,
    //fontFamily: 'DMSans-Regu',
    color: '#FFFFFF95',
  }
});