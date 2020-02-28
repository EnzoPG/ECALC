import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  displayHist: {
    flex: 1,
    padding: 5,
    justifyContent: 'center',
    backgroundColor: '#04d0ab',
    alignItems: 'flex-end'
  },
  displayValueHist: {
    fontSize: 25,
    color: "#fff"
  }
});

export default props =>
  <View style={ styles.displayHist }>
    <Text style={ styles.displayValueHist }>{ props.valueHist }</Text>
  </View>
