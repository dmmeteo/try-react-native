import React, { Component } from 'react';
import { Alert, View, Dimensions, BackHandler } from 'react-native';
import BasicFlatList from './components/BasicFlatList';

export default class App extends Component {
    render() {
        return (
            <BasicFlatList />
        );
    }
}
