import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Robot from './components/Robot';
import TextBlink from './components/TextBlink';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Robot/>
        <TextBlink/>
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
