import React, { Component } from 'react';
import { View } from 'react-native';

class FixedDemension extends Component {
    render() {
        return (
            <View>
                <View style={{width: 120, height:50, backgroundColor: 'blue'}}></View>
                <View style={{width: 130, height:50, backgroundColor: 'red'}}></View>
                <View style={{width: 140, height:50, backgroundColor: 'green'}}></View>
                <View style={{width: 150, height:50, backgroundColor: 'yellow'}}></View>
                <View style={{width: 160, height:50, backgroundColor: 'black'}}></View>
            </View>
        );
    }
}

export default FixedDemension;