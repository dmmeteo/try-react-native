import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FlexExample from './components/FlexExample';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <FlexExample/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstText: {
    margin: 5,
    color: 'green'
  }
});
