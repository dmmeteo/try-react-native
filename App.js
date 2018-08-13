import React from 'react';
import { StyleSheet, TextInput, Text, View } from 'react-native';

export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            typedText: 'please type your text'
        };
    }

    render() {
        return (
            <View>
                <TextInput 
                    style={styles.firstInput}
                    keyboardType='email-address'
                    placeholder='Enter your email'
                    placeholderTextColor='red'
                    underlineColorAndroid='transparent'
                    onChangeText={
                        (text) => {
                            this.setState(
                                (previouseState) => {
                                    return {
                                        typedText: text
                                    }
                                }
                            )
                        }
                    }
                />
                <Text style={styles.firstText}>{this.state.typedText}</Text>
                <TextInput
                    style={styles.firstInput}
                    keyboardType='default'
                    secureTextEntry={true}
                    placeholder='Enter your password'
                    underlineColorAndroid='transparent'
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    firstInput: {
        height: 40,
        margin: 20,
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
    },
    firstText: {
        marginLeft: 20
    }
});
