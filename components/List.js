import React from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  SafeAreaView,
} from "react-native";

// definition of the Item, which will be rendered in the FlatList
const Item = ({ name, details }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{name}</Text>
    <Text style={{color: 'white'}}>{details}</Text>
  </View>
);

// the filter
const List = (props) => {
  const renderItem = ({ item }) => {
    // when no input, show all
    if (props.searchPhrase === "") {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the name
    if (item.name.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
    // filter of the description
    if (item.details.toUpperCase().includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))) {
      return <Item name={item.name} details={item.details} />;
    }
  };

  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default List;

const styles = StyleSheet.create({
  list__container: {
    width: "100%",
    height: '50%',
  }, 
  item: {
    padding: 10,
    borderBottomWidth: 2,
    borderBottomColor: "lightgrey"
    
  },
  title: {
    fontSize: 20,
    marginBottom: 5,
   
    color: 'white',
  },
});