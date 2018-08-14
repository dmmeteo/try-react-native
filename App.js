import React from 'react';
import { Alert, AppRegistry, StyleSheet, View } from 'react-native';
import Button from 'react-native-button';

export default class App extends React.Component {
    _onPressButton(){
        Alert.alert('You pressed the button!');
    }

    render(){
        return (
            <View style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Button
                    style={{
                        backgroundColor: 'green',
                        padding: 15,
                        borderRadius: 50,
                        color: 'white'
                    }}
                    onPress={this._onPressButton}
                >This is a button</Button>
            </View>
        );
    }
}
