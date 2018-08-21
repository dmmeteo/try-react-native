import React, { Component } from 'react';
import { Alert, View, Dimensions, BackHandler } from 'react-native';
import BasicSectionList from './components/BasicSectionList';

export default class App extends Component {
    render() {
        return (
            <BasicSectionList />
        );
    }
}
