import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { Colors } from '../config';

export const FormErrorMessage = ({ error, visible }) => {
  if (!error || !visible) {
    return null;
  }

  return <View style={{padding: 10, backgroundColor: Colors.red,
borderRadius: 5,
}}><Text style={styles.errorText}>{error}!</Text></View>;
};

const styles = StyleSheet.create({
  errorText: {
    marginLeft: 15,
    color: Colors.white,
    fontSize: 16,
    marginVertical: 8,
    fontWeight: '600'
  }
});
