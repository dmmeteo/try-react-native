import React, { Component } from 'react';
import { Alert, View, Dimensions, BackHandler } from 'react-native';
import LifeCycleComponent from './components/LifeCycleComponent';

export default class App extends Component {
    constructor(props){
        super(props);
        Alert.alert(`${Date.now()}. This is constructor`);
        this.state = {
            numberOfRefresh: 0
        }
    }
    render() {
        return (
            <LifeCycleComponent />
        );
    }
}
