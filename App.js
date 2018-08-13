import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import FixedDemension from './components/FixedDemension';
import FlexDemension from './components/FlexDemension';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlexDemension/>
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
