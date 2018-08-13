import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component{
    render(){
        let greeting = `
            Hello ${this.props.name}! How are you?
        `
        return(
            <Text>{greeting}</Text>
        );
    }
}

export default class MultipleGreetings extends Component{
    render(){
        return(
            <View 
                style={{alignItems: 'center'}}
            >
                <Greeting name='Biba'/>
                <Greeting name='Boba'/>
            </View>
        );
    }
}