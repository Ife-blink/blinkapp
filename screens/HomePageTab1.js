import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  SectionList,
  SafeAreaView,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import { useFonts } from 'expo-font';

const ListItem = ({ item }) => {
  return (
    <View style={styles.item}>
      <ImageBackground
        source={{
          uri: item.uri,
        }}
        style={styles.itemPhoto}
        imageStyle={{borderRadius: 5,}}
      >
     <View style={{padding: 9,}}><View style={{backgroundColor: "#000000", 
            height: 30, 
            width: 30, 
            borderRadius: 5,}}>
              </View>
              </View>
            <View style={{padding: 10, paddingBottom: 20,}}>
            <Text style={styles.itemText}>{item.text}</Text>
            </View>  
      </ImageBackground>  
      
      
    </View>
  );
};

const HeaderItem = ({ section }) => {
  return(
    <View>
    
    
    <FlatList
          horizontal
          data={section.data}
          renderItem={({ item }) => <ListItem item={item} />}
          showsHorizontalScrollIndicator={false}
        />
      
    </View>

  );
};

const SECTIONS = [
  {
    title: 'Made for you',
    horizontal: true,
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/10/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1002/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1006/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1008/200',
      },
    ],
  },
  {
    title: 'Sport News',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1011/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1012/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1013/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1015/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1016/200',
      },
    ],
  },
  {
    title: 'Based on your recent reading',
    data: [
      {
        key: '1',
        text: 'Item text 1',
        uri: 'https://picsum.photos/id/1020/200',
      },
      {
        key: '2',
        text: 'Item text 2',
        uri: 'https://picsum.photos/id/1024/200',
      },

      {
        key: '3',
        text: 'Item text 3',
        uri: 'https://picsum.photos/id/1027/200',
      },
      {
        key: '4',
        text: 'Item text 4',
        uri: 'https://picsum.photos/id/1035/200',
      },
      {
        key: '5',
        text: 'Item text 5',
        uri: 'https://picsum.photos/id/1038/200',
      },
    ],
  },
];

export default function HomePageTab1() {

//fonts
  


  return (
    <View style={styles.container}>
      <StatusBar style="light" />
      <SafeAreaView >
        <SectionList
          contentContainerStyle={null}
          stickySectionHeadersEnabled={false}
          sections={SECTIONS}
          /*renderSectionHeader={({ section }) => ( //callback
           <HeaderItem section={section} />
          )}*/
          renderItem={HeaderItem}
        />
      </SafeAreaView>
    </View>
  );
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0A0A0A',
    
  },
  sectionHeader: {
    fontFamily: 'DMSans-Black',
    fontSize: 23,
    color: '#f4f4f4',
    marginTop: 20,
    marginBottom: 5,
    
  },
  item: {
    margin: 3,
  },
  itemPhoto: {
    width: 250,
    height: 250,
    justifyContent: "space-between", 
  },
  itemText: {
    color: '#FFFFFF',
    marginTop: 5,
    //fontFamily: 'DMSans-Med',
    fontSize: 23,
  },
});