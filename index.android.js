import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  FlatList,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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
  
      ],
      todoText: "what are you doing todo ?",
    }
  }

  keyExtractor = (item, index) => item.id;

  addTodo = () => {
    let text = this.state.todoText;
    if(text){
      let todo = {
        id: Date.now() + 1,
        todo: text
      }
      this.setState({ todos: [...this.state.todos, todo], todoText: ''})
    }
  }

  deletTodo = (id) => {
    // let newList = this.state.todos.filter( (e, i) => i !== id )
    // this.setState({todos: newList})


  }

  renderList = () => {
    if(this.state.todos.length !== 0){
      return (
        <FlatList 
            style={{marginTop: 20}}
            data={this.state.todos}
            renderItem={({item}) => 
              <View id={item.id} style={{ flex: 1, flexDirection: "row", justifyContent: "space-between", backgroundColor: '#fff', borderRadius: 2, paddingHorizontal: 10, paddingVertical: 15, marginTop: 5}}>
                <View>
                  <Text style={{color: '#000'}}>{item.todo}</Text>
                </View>
                <View>
                  <Text 
                    style={{fontFamily: "Segoe UI", marginRight: 20, fontWeight: 'bold'}}
                    onPress={ () => {
                      let newList = this.state.todos.filter( (e, i) => e.id !== item.id )
                      this.setState({todos: newList})
                    }}
                  >
                    <Icon name="trash" size={20} color="red"/>
                  </Text>
                </View>
              </View>
            }
            keyExtractor={this.keyExtractor}
          />
      )
    }else{
      return <Text style={{textAlign: 'center', fontSize: 24, color: "#fff", marginTop: 100}}>NO TODOS ADDED YET</Text>
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <StatusBar 
          backgroundColor= "#1abc9c"
          barStyle="light-content"
        />
        <View style={{ padding: 10, marginTop: 20}}>
          <TextInput 
            value={this.state.todoText}
            placeholder="what are you doing today?"
            onSubmitEditing={this.onSubmit}
            underlineColorAndroid="transparent"
            onChangeText={ (todoText) => this.setState({todoText})  }
            style={{backgroundColor: "#fff", padding: 9, borderRadius: 2}}
          />
          <TouchableOpacity 
            style={{backgroundColor: "#1abc9c", paddingVertical: 15, paddingHorizontal: 10,  marginTop: 10, borderRadius: 2}}
            onPress={this.addTodo}
          >
            <Text style={{color: '#fff', fontSize: 16, textAlign: "center"}}>Add to todo</Text>
          </TouchableOpacity>
        </View>
        <View style={{padding: 10}}>
          { this.renderList() }
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
