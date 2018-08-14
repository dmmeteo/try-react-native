import React from 'react';
import { StyleSheet, TextInput, Text, View, Keyboard } from 'react-native';

export default class TextInputsExample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typedText: 'please type your text',
            typedPassword: '',
            typedDescription: ''
        };
    }

    componentWillMount() {
        this.keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', () => {
            this.setState(() => {
                return { typedText: 'Keyboard is shown' }
            })
        });
        this.keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
            this.setState(() => {
                return { typedText: 'Keyboard Hide' }
            })
        });
    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove()
        this.keyboardShowListener.remove()
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
                    onChangeText={(text) => {
                        this.setState(() => {
                            return {
                                typedPassword: text
                            }
                        })
                    }}
                />
                <TextInput
                    style={styles.textarea}
                    underlineColorAndroid='transparent'
                    multiple={true}
                    returnKeyType='done'
                    editable={true}
                    autoFocus={true}
                    onChangeText={(text) => {
                        this.setState(() => {
                            return {
                                typedDescription: text
                            }
                        })
                    }}
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
    },
    textarea: {
        height: 100,
        margin: 20,
        borderBottomColor: 'green',
        borderLeftColor: 'green',
        borderRightColor: 'green',
        borderBottomWidth: 3,
        borderLeftWidth: 3,
        borderRightWidth: 3,
        borderTopColor: 'gray',
        borderTopWidth: 1,
        padding: 10
    }
});
