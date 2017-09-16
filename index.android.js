import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';
import ActionButton from './ActionButton';


var config = {
    apiKey: "AIzaSyCaaH4Y2qYQys5y6orVhymewrqKwvnGJvM",
    authDomain: "rntodoapp-766cd.firebaseapp.com",
    databaseURL: "https://rntodoapp-766cd.firebaseio.com",
    projectId: "rntodoapp-766cd",
    storageBucket: "rntodoapp-766cd.appspot.com",
    messagingSenderId: "95727791919"
  };
  const firebaseApp = firebase.initializeApp(config);


export default class reactNativeTodo extends Component {
  constructor(props){
    super(props);
  }

  onpress(){
    alert('wor');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>AM working</Text>
        <ActionButton onPress={this.onpress} title="save to todo"/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1abc9c',
    flex: 1,
    padding: 20
  }
});

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
