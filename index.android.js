import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
  StatusBar
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
          priority: 'high'
        },
        {
          id: Date.now() + 2,
          todo: "Create a basic todo app in react-native",
          priority: 'average'
        },
        {
          id: Date.now() + 3,
          todo: "Create a basic todo app in react-native",
          priority: 'low'
        },
      ]
    }
  }

  keyExtractor = (item, index) => item.id;

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor= "#2c3e50"
          barStyle="light-content"
        />
        <View>
          <TextInput 
            placeholder="What are you doing todo ?"
            onSubmitEditing={this.onSubmit}
            style={{backgroundColor: "#fff", padding: 10, borderRadius: 3}}
          />
          <TouchableHighlight 
            style={{backgroundColor: "#1abc9c", padding: 10, marginTop: 10, borderRadius: 3}}
            onPress={this.addTodo}
          >
            <Text style={{color: '#fff', fontSize: 16, textAlign: "center"}}>Add To Todo</Text>
          </TouchableHighlight>
        </View>
        <FlatList 
          style={{marginTop: 50}}
          data={this.state.todos}
          renderItem={({item}) => 
            <View style={{flex: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#fff', borderRadius: 3, paddingHorizontal: 10, paddingVertical: 15, marginTop: 10}}>
              <View>
                <Text style={{color: '#000'}}>{item.todo}</Text>
                <Text style={{backgroundColor: "#1abc9c", padding: 2, marginTop: 5, width: 50, fontSize: 9, borderRadius: 3, textAlign: 'center'}}>{item.priority}</Text>
              </View>
              <View>
                <Text>X</Text>
              </View>
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
    backgroundColor: '#fff',
    flex: 1,
    padding: 20
  }
});

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
