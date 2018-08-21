import React, { Component } from 'react';
import { Alert, View, Dimensions, BackHandler } from 'react-native';
import HorizontalFlatList from './components/HorizontalFlatList';

export default class App extends Component {
    render() {
        return (
            <HorizontalFlatList />
        );
    }
}
