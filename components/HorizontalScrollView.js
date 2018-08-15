import React, { Component } from 'react';
import {ScrollView, Text, View, Dimensions} from 'react-native';

class HorizontalScrollView extends Component {
    render() {
        let screenWidth = Dimensions.get('window').width;
        let screenHeight = Dimensions.get('window').height;
        return (
            <ScrollView
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                showsVerticalScrollIndicator={false}
                style={{marginTop: 20}}
                pagingEnabled={true}
                // onMomentumScrollBegin={()=>{
                //     alert('Begin scrolling')
                // }}
                // onMomentumScrollEnd={() => {
                //     alert('End scrolling')
                // }}
                onScroll={(event)=>{
                    let logData = `Scroll to x = ${event.nativeEvent.contentOffset.x}, y = ${event.nativeEvent.contentOffset.y}`;
                    alert(logData);
                }}
                scrollEventThrottle={1000}
            >
                <View
                    style={{
                        backgroundColor: '#5f9ea0',
                        flex: 1,
                        width: screenWidth,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        Screen 1
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: 'tomato',
                        flex: 1,
                        width: screenWidth,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        Screen 2
                    </Text>
                </View>
                <View
                    style={{
                        backgroundColor: 'gray',
                        flex: 1,
                        width: screenWidth,
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text
                        style={{
                            padding: 15,
                            color: 'white',
                            textAlign: 'center'
                        }}
                    >
                        Screen 3
                    </Text>
                </View>
            </ScrollView>
        );
    }
}

export default HorizontalScrollView;