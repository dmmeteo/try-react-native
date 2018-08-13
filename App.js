import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Robot from './components/Robot';
import MultipleGreetings from './components/MultipleGreetings';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <MultipleGreetings/>
        <Robot/>
        <Text>Open up App.js to start working on your app!</Text>
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
});
