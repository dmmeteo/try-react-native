import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import VerticlaScrollView from './components/VerticlaScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';

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
                {/* <VerticlaScrollView/> */}
                <HorizontalScrollView/>
            </View>
        );
    }
}
