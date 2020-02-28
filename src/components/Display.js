import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  display: {
    flex: 3,
    padding: 20,
    justifyContent: 'center',
    backgroundColor: '#717171',
    alignItems: 'flex-end'
  },
  displayValue: {
    fontSize: 60,
    color: "#fff"
  }
});

export default props =>
  <View style={ styles.display }>
    <Text style={ styles.displayValue }>{ props.value }</Text>
  </View>
