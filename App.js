import React, { Component } from 'react';
import { Alert, View, Dimensions, BackHandler } from 'react-native';
import VerticlaScrollView from './components/VerticlaScrollView';
import HorizontalScrollView from './components/HorizontalScrollView';
import ViewPageExample from './components/ViewPageExample';

export default class App extends Component {
    componentDidMount() {
        BackHandler.addEventListener('hardwareBackPress', this.handleBackPress);
    }

    componentWillUnmount() {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackPress);
    }

    handleBackPress = () => {
        Alert.alert('false');
        return true;
    }

    render() {
        return (
            <ViewPageExample />
        );
    }
}
