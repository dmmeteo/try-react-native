import React, { Component } from 'react';
import {View} from 'react-native';
import VerticlaScrollView from './components/VerticlaScrollView';

export default class App extends Component {
    render() {
        return (
            <View 
                style={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
            >
                <VerticlaScrollView/>
            </View>
        );
    }
}
