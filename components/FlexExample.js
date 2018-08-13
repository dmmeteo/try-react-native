import React, { Component } from 'react';
import { View, Text } from 'react-native';

class FlexExample extends Component {
    render() {
        return (
            <View style={{flex: 1, flexDirection: 'column'}}>
                <Text style={{width:50, height:50, backgroundColor: 'red'}}/>
                <Text style={{width:50, height:50, backgroundColor: 'blue'}}/>
                <Text style={{width:50, height:50, backgroundColor: 'green'}}/>
            </View>
        );
    }
}

export default FlexExample;