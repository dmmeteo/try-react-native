import React from 'react';
import { 
    Alert,
    StyleSheet,
    View,
    Image,
    Text,
    TouchableHighlight,
    TouchableNativeFeedback,
    TouchableOpacity,
    TouchableWithoutFeedback
} from 'react-native';

export default class App extends React.Component {
    _onPressButton(){
        Alert.alert('You pressed the button!');
    }

    render(){
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center'
            }}>
                <TouchableHighlight
                    onPress={this._onPressButton}
                    underlayColor='red'
                    onShowUnderlay={() => {
                        alert('onShowUnderlay button!')
                    }}
                >
                    <View style={{backgroundColor: 'green'}}>
                        {/* <Image
                            style={{
                                width: 100,
                                height:100
                            }}
                            source={require('./images/button.png')}
                        >
                        </Image> */}
                        <Text
                            style={{
                                padding: 20,
                                fontSize: 18,
                                color: 'white'
                            }}
                        >
                            TouchableHighlight
                        </Text>
                    </View>
                </TouchableHighlight>
                <TouchableNativeFeedback
                    useForeground={false}
                    onPress={this._onPressButton}
                >
                    <View
                        style={{
                            margin: 20,
                            width: 300,
                            height: 50,
                            backgroundColor: 'blue'
                        }}
                    >
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            TouchableNativeFeedback
                        </Text>
                    </View>
                </TouchableNativeFeedback>
                <TouchableOpacity
                    onPress={this._onPressButton}
                    activeOpacity={0.7}
                >
                    <View
                        style={{
                            width: 200,
                            height: 50,
                            backgroundColor: 'red'
                        }}
                    >
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            TouchableOpacity
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableWithoutFeedback
                    onPress={this._onPressButton}
                    onLongPress={() => {
                        alert('onLongPress')
                    }}
                    // onPressIn={()=>{
                    //     alert('onPressIn')
                    // }}
                    // onPressOut={() => {
                    //     alert('onPressOut')
                    // }}
                    disabled={false}
                >
                    <View
                        style={{
                            margin: 20,
                            width: 300,
                            height: 50,
                            backgroundColor: 'purple'
                        }}
                    >
                        <Text
                            style={{
                                margin: 10,
                                fontSize: 20,
                                color: 'white',
                                textAlign: 'center'
                            }}
                        >
                            TouchableWithoutFeedback
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}
