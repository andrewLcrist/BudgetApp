import React, { Component } from 'react';
import firebase, { reference, signIn } from '../firebase.js';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
  ActivityIndicator,
} from 'react-native';
import Separator from '../Helpers/Separator';
import ExpenseSetUp from './ExpenseSetUp';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    marginTop: 65,
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#48BBEC'
  },
  text: {
    fontSize: 18,
    color: '#111',
    textAlign: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: '#111',
    alignSelf: 'center'
  },
  selectedButton: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: '#10DDC2',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
     height: 50,
     padding: 4,
     marginRight: 5,
     fontSize: 23,
     borderWidth: 1,
     borderColor: 'white',
     borderRadius: 8,
     color: 'white'
 },
})

export default class IncomeSetUp extends Component {
  constructor(props) {
    super(props)

    this.state = {
      income: '',
      weekly: false,
      biweekly: false,
      monthly: false,
      annually: false,
      none: false
    }
  }

  handleSubmit() {
    let user = this.props.user;
    let userReference = reference.child(`${user.uid}`)
    let { income } = this.state
    userReference.push({
      income: income,
      weekly: false,
      biweekly: false,
      monthly: false,
      annually: false
    })
    this.props.navigator.push({
      title: 'Recurring Expenses',
      component: ExpenseSetUp
    })
  }

  calculateIncome() {
    if(this.state.weekly) {
      
    }
  }

  render() {
    console.log(this.props.user);
    return (
      <View style={styles.container}>
        <Text> Income </Text>
        <TextInput
          style={styles.searchInput}
          onChangeText={(text) => this.setState({ income: text })}
          placeholder='Enter income'
          />
        <Text> How Often? </Text>
        <TouchableHighlight
            style={ this.state.weekly ? styles.selectedButton : styles.button}          underlayColor='black'
            onPress={() => this.setState({ weekly: !this.state.weekly })}>
            <Text style={styles.buttonText}> Weekly </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={ this.state.biweekly ? styles.selectedButton : styles.button}
            underlayColor='black'
            onPress={() => this.setState({ biweekly: !this.state.biweekly })}>
            <Text style={styles.buttonText}> Biweekly </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={ this.state.monthly ? styles.selectedButton : styles.button}
            underlayColor='black'
            onPress={() => this.setState({ monthly: !this.state.monthly })}>
            <Text style={styles.buttonText}> Monthly </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={ this.state.annually ? styles.selectedButton : styles.button}
            underlayColor='black'
            onPress={() => this.setState({ annually: !this.state.annually })}>
            <Text style={styles.buttonText}> Annually </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={ this.state.none ? styles.selectedButton : styles.button}
            underlayColor='black'
            onPress={() => this.setState({ none: !this.state.none })}>
            <Text style={styles.buttonText}> None </Text>
        </TouchableHighlight>
        <TouchableHighlight
            style={styles.button}
            underlayColor='black'
            onPress={() => this.handleSubmit()}>
            <Text style={styles.buttonText}> Continue </Text>
        </TouchableHighlight>
      </View>
    )
  }
}
