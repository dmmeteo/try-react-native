import React, {Component} from 'react';
import {Text, View} from 'react-native';

class Greeting extends Component{
    render(){
        return(
            <Text>Hello {this.props.name}. How are you?</Text>
        );
    }
}

export default class MultipleGreetings extends Component{
    render(){
        return(
            <View 
                style={{alignItems: 'center'}}
            >
                <Greeting name='Boba'/>
            </View>
        );
    }
}