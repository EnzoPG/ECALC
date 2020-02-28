import React, { Component } from 'react';
import Styles from './src/styles/Styles';
import Button from './src/components/Button';
import Display from './src/components/Display';
import DisplayHist from './src/components/DisplayHist';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const initialState = {
  displayValue: '0',
  clearDisplay: false,
  operation: null,
  values: [0, 0],
  current: 0
}

export default class App extends Component {

  // Clona a constante state inicial
  state = { ...initialState };

  // Adiciona um dígito ao cálculo
  addDigit = n => {

    // Constante para limpeza do display
    const clearDisplay = this.state.displayValue === '0' || this.state.clearDisplay;

    // Adiciona condição para não adicionar dois pontos
    if(n === '.' && !clearDisplay && this.state.displayValue.includes('.')) return;

    const currentValue = clearDisplay ? '' : this.state.displayValue;
    const displayValue = currentValue + n;

    // Setando valores atualizados
    this.setState({
      displayValue,
      clearDisplay: false
    });

    if(n != '.'){
      const newValue = parseFloat(displayValue);
      const values = [...this.state.values];
      values[this.state.current] = newValue;
      this.setState({ values });
    }
  };

  // Limpa a memória da Calculadora
  clearMemory = () => {
    this.setState({ ...initialState });
  };

  // Função para setar a operação do cálculo
  setOperation = operation => {
    if(this.state.current === 0){
      this.setState({ operation, current: 1, clearDisplay: true });
    }else{
      const equals = operation === '=';
      const values = [...this.state.values];
      try{
        values[0] = eval(`${values[0]} ${this.state.operation} ${values[1]}`);
      }catch(e){
        values[0] = this.state.values[0];
      }

      values[1] = 0;
      this.setState({
        displayValue: values[0].toString(),
        operation: equals ? null : operation,
        currentValue: equals ? 0 : 1,
        clearDisplay: !equals,
        values,
      });
    }
  };

  render(){
    return (
      <>
      <StatusBar barStyle="dark-content" />
        <Display value={ this.state.displayValue }></Display>
        <View style={ Styles.btnFlex }>
          <Button label='AC' triple onClick={ this.clearMemory }/>
          <Button label='/' operation onClick={ this.setOperation }/>
          <Button label='7' onClick={ this.addDigit }/>
          <Button label='8' onClick={ this.addDigit }/>
          <Button label='9' onClick={ this.addDigit }/>
          <Button label='*' operation onClick={ this.setOperation }/>
          <Button label='4' onClick={ this.addDigit }/>
          <Button label='5' onClick={ this.addDigit }/>
          <Button label='6' onClick={ this.addDigit }/>
          <Button label='-' operation onClick={ this.setOperation }/>
          <Button label='1' onClick={ this.addDigit }/>
          <Button label='2' onClick={ this.addDigit }/>
          <Button label='3' onClick={ this.addDigit }/>
          <Button label='+' operation onClick={ this.setOperation }/>
          <Button label='0' double onClick={ this.addDigit }/>
          <Button label='.' onClick={ this.addDigit }/>
          <Button label='=' operation onClick={ this.setOperation }/>
        </View>
      </>
    )
  }
};
