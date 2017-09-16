import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import * as firebase from 'firebase';


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
  render() {
    return (
      <View style={styles.container}>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    flex: 1,
  }
});

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
