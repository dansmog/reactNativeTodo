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
import Icon from 'react-native-vector-icons/SimpleLineIcons';
// import * as firebase from 'firebase';
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
          todo: "Start learning Meteorjs Properly",
        },
        {
          id: Date.now() + 3,
          todo: "Finish setting up sass and webpack with es6",
        },
        {
          id: Date.now() + 4,
          todo: "Learn Async/await in javascript",
        },
        {
          id: Date.now() + 5,
          todo: "Authorization with Firebase in react-native",
        },
      ],
      todoText: "",
    }
  }

  keyExtractor = (item, index) => item.id;

  addTodo = () => {
    let text = this.state.todoText;
    let todo = {
      id: Date.now() + 1,
      todo: text
    }
    this.setState({ todos: [...this.state.todos, todo]})
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor= "#1abc9c"
          barStyle="light-content"
        />
        <View style={{ padding: 10}}>
          <TextInput 
            placeholder="What are you doing todo ?"
            onSubmitEditing={this.onSubmit}
            underlineColorAndroid="transparent"
            onChangeText={ (todoText) => this.setState({todoText})  }
            style={{backgroundColor: "#fff", padding: 9, borderRadius: 2}}
          />
          <TouchableHighlight 
            style={{backgroundColor: "#1abc9c", paddingVertical: 15, paddingHorizontal: 10,  marginTop: 10, borderRadius: 2}}
            onPress={this.addTodo}
          >
            <Text style={{color: '#fff', fontSize: 16, textAlign: "center"}}>Add to todo</Text>
          </TouchableHighlight>
        </View>
        <View style={{padding: 10}}>
          <FlatList 
            style={{marginTop: 30}}
            data={this.state.todos}
            renderItem={({item}) => 
              <View style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#fff', borderRadius: 2, paddingHorizontal: 10, paddingVertical: 15, marginTop: 5}}>
                <View>
                  <Text style={{color: '#000'}}>{item.todo}</Text>
                </View>
                <View>
                  <Text style={{fontFamily: "Segoe UI"}}><Icon name="trash" size={20} color="red"/></Text>
                </View>
              </View>
            }
            keyExtractor={this.keyExtractor}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#23eebc',
    flex: 1,
  }
});

AppRegistry.registerComponent('reactNativeTodo', () => reactNativeTodo);
