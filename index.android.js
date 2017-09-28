import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight
} from 'react-native';
// import * as firebase from 'firebase';
// import ActionButton from './ActionButton';
// import ListItem from './ListITem';


// var config = {
//     apiKey: "AIzaSyCaaH4Y2qYQys5y6orVhymewrqKwvnGJvM",
//     authDomain: "rntodoapp-766cd.firebaseapp.com",
//     databaseURL: "https://rntodoapp-766cd.firebaseio.com",
//     projectId: "rntodoapp-766cd",
//     storageBucket: "rntodoapp-766cd.appspot.com",
//     messagingSenderId: "95727791919"
//   };
//   const firebaseApp = firebase.initializeApp(config);


export default class reactNativeTodo extends Component {
  constructor(props){
    super(props);
    this.state = {
      todos: [
        {
          id: Date.now() + 1,
          todo: "Create a basic todo app in react-native",
        },
        {
          id: Date.now() + 2,
          todo: "Create a basic todo app in react-native",
        },
        {
          id: Date.now() + 3,
          todo: "Create a basic todo app in react-native",
        },
      ]
    }
  }

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <View>
          <TextInput 
            placeholder="What are you doing todo ?"
            onSubmitEditing={this.onSubmit}
            underlineColorAndroid="transparent"
            style={{backgroundColor: "#fff", padding: 15, borderRadius: 5}}
          />
          <TouchableHighlight style={{backgroundColor: "#1abc9c", padding: 15, marginTop: 10, borderRadius: 5}}>
            <Text style={{color: '#fff', fontSize: 16, textAlign: "center"}}>Add To Todo</Text>
          </TouchableHighlight>
        </View>
        <FlatList 
          style={{marginTop: 50}}
          data={this.state.todos}
          renderItem={({item}) => 
            <View style={{backgroundColor: '#fff', padding: 10, marginTop: 10}}>
              <Text style={{color: '#000'}}>{item.todo}</Text>
            </View>
          }
          keyExtractor={this.keyExtractor}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f3f3f3',
    flex: 1,
    padding: 20
  }
});

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
