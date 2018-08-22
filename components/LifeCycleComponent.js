import React, { Component } from 'react';
import {View, Text, StyleSheet} from 'react-native';

class LifeCycle extends Component {
    constructor(props) {
        super(props);
        console.log(`${Date.now()}. This is constructor`);
        this.state = {
            numberOfRefresh: 0
        }
        setInterval(() => {
            console.log(`${Date.now()}. Change State each 5 seconds`)
            this.setState(prevState => {
                return {numberOfRefresh: prevState.numberOfRefresh + 1}
            });
        }, 5000)
    }
    componentWillMount(){
        console.log(`${Date.now()}. This is componentWillMount`)
    }
    componentDidMount(){
        console.log(`${Math.floor(Date.now())}. This is componentDidMount`)
    }

    shouldComponentUpdate(){
        console.log(`${Math.floor(Date.now())}. This is shouldComponentUpdate`);
        return true; //if 'false' component will not render when state was change
    }
    componentWillUpdate(){
        console.log(`${Math.floor(Date.now())}. This is componentWillUpdate`);
    }
    componentDidUpdate(){
        console.log(`${Math.floor(Date.now())}. This is componentDidUpdate`);
    }
    
    render() {
        console.log(`${Math.floor(Date.now())}. This is render function`);
        let textToDisplay = `Number of refresh: ${this.state.numberOfRefresh}`;
        return (
            <View style={styles.container}>
                <Text style={styles.text}>Hello world!</Text>
                <Text style={styles.text}>{textToDisplay}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
        backgroundColor: 'black'
    },
    text: {
        color: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    }
});

export default class LifeCycleComponent extends Component {
    constructor(props){
        super(props);
    }
    render() {
        return (
            <LifeCycle propA='abc' />
        );
    }
}