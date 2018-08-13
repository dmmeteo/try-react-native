import React, { Component } from 'react';
import { View } from 'react-native';

class FlexDemension extends Component {
    render() {
        return (
            <View style={{flex: 1, marginTop: 20,}}>
                <View style={{ flex: 20, backgroundColor: '#66cdaa' }}></View>
                <View style={{ flex: 80, backgroundColor: '#1e90ff' }}></View>
            </View>
        );
    }
}

export default FlexDemension;