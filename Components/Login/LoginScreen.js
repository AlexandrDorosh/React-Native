import React, { Component } from 'react';
import { Text, View, TouchableOpacity, TextInput, StyleSheet } from 'react-native';


class LoginScreen extends Component {
  state = {
    email: '',
    password: ''
  }
  handleEmail = (text) => {
    this.setState({ email: text })
  }
  handlePassword = (text) => {
    this.setState({ password: text})
  }
  login = (email, pass) => {
    alert('email: ' + email + ' password: ' + pass)
  }
  render(){
    return (
      <View style={ styles.container }>
        <TextInput style={ styles.input } 
          underlineColorAndroid= 'transparent'
          placeholder='Email'
          placeholderTextColor='tomato'
          autoCapitalize='none'
          onChangeText={ this.handleEmail }/>
        <TextInput style={ styles.input } 
          underlineColorAndroid= 'transparent'
          placeholder='Password'
          placeholderTextColor='tomato'
          autoCapitalize='none'
          onChangeText={ this.handlePassword }/>
        <TouchableOpacity style={ styles.submitButton }
          onPress = {
            () => this.login(this.state.email, this.state.password)
          }>
          <Text style={ styles.submitButtonText }>Submit</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 23,
      justifyContent: 'center'
    },
    input: {
      paddingLeft: 15,
      margin: 15,
      height: 40,
      borderColor: 'tomato',
      borderWidth: 1
    },
    submitButton: {
      backgroundColor: 'tomato',
      padding: 10,
      margin: 15,
      height: 40
    },
    submitButtonText: {
      color: 'white'
    }
})

