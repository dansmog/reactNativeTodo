import React, {Component} from 'react';
import ReactNative from 'react-native';
const { StyleSheet, Text, View, TouchableHighlight} = ReactNative;

class ActionButton extends Component {
  render() {
    return (
      <View>
        <TouchableHighlight
          onPress={this.props.onPress}
          style={{backgroundColor: '#fff', paddingVertical: 15, paddingHorizontal: 9, marginTop: 20 }}
        >
          <Text style={{textAlign: 'center', fontSize: 20 }}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}

module.exports = ActionButton;