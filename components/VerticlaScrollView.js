import React, { Component } from 'react';
import {Text, View, Image, Dimensions, ScrollView, TextInput} from 'react-native';

class VerticlaScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        return (
            <ScrollView
                keyboardDismissMode='on-drag'
                minimumZoomScale={0.2}
                maximumZoomScale={3}
                style={{marginTop: 20, backgroundColor: 'black'}}
            >
                <Image 
                    source={require('../images/1up-1.jpg')}
                    style={{
                        width: screenWidth,
                        height: screenWidth * 1630 / 2443,
                    }}
                >
                </Image>
                <Text
                    style={{
                        padding: 15,
                        color: 'white',
                        textAlign: 'center',
                        backgroundColor: 'green'
                    }}
                >
                    This is a text
                </Text>
                <TextInput 
                    style={{
                        padding: 10,
                        margin: 10,
                        borderWidth: 1
                    }}
                    underlineColorAndroid='transparent'
                    placeholder='Enter text'
                />
                <View style={{backgroundColor:'#a03b51'}}>
                    <Text
                        style={{
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        Text inside a View
                    </Text>
                </View>
                <Image
                    source={require('../images/1up-1.jpg')}
                    style={{
                        width: screenWidth,
                        height: screenWidth * 1630 / 2443
                    }}
                >
                </Image>
                <Image
                    source={require('../images/1up-1.jpg')}
                    style={{
                        width: screenWidth,
                        height: screenWidth * 1630 / 2443
                    }}
                >
                </Image>
                <Image
                    source={require('../images/1up-1.jpg')}
                    style={{
                        width: screenWidth,
                        height: screenWidth * 1630 / 2443
                    }}
                >
                </Image>
                <Image
                    source={require('../images/1up-1.jpg')}
                    style={{
                        width: screenWidth,
                        height: screenWidth * 1630 / 2443
                    }}
                >
                </Image>
            </ScrollView>
        );
    }
}

export default VerticlaScrollView;