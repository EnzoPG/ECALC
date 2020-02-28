import React from 'react';
import Styles from '../styles/Styles';
import { View, Text, TouchableHighlight } from 'react-native';

export default props => {

  // Atribui todos os estilos para somente uma variável
  const stylesBtns = [Styles.btnStyle];

  // Condições para cada tipo de botão
  if(props.double) stylesBtns.push(Styles.buttonDouble);
  if(props.triple) stylesBtns.push(Styles.buttonTriple);
  if(props.operation) stylesBtns.push(Styles.operationButton);

  return (
      <TouchableHighlight onPress={() => props.onClick(props.label) }>
        <View style={ stylesBtns.container }>
          <Text style={ stylesBtns }>{ props.label }</Text>
        </View>
      </TouchableHighlight>
  )
}
