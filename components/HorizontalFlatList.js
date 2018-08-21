import React, { Component } from 'react';
import {View, Text, FlatList, Platform, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {horizontalStatus, horizontalFlatListData} from '../data/horizontalFlatListData';
import Icon from 'react-native-vector-icons/Ionicons';


class HorizontalFlatListItem extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <TouchableOpacity
                onPress={() => {
                    alert(`You pressed: ${this.props.item.hour}`);
                }}
                style={{
                    flex: 1,
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: 90,
                    borderRadius: 10,
                    borderWidth: 1,
                    borderColor: 'gray',
                    margin: 4,
                }}
            >
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'white',
                    margin: 20
                }}>{this.props.item.hour}</Text>
                <Icon name={(Platform.OS === 'ios') ? this.props.item.status.ios : this.props.item.status.android}
                    size={30}
                    color='white'/>
                <Text style={{
                    fontSize: 16,
                    color: 'white',
                    margin: 20
                }}>{this.props.item.degrees} ℃</Text>
            </TouchableOpacity>
        );
    }
}

export default class HorizontalFlatList extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                flexDirection: 'column',
                marginTop: 20,
            }}> 
                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    left: 0,
                    right: 0
                }}>
                    <Image
                        style={{
                            flex: 1,
                            flexDirection: 'column',
                            width: null,
                            height: null,
                            backgroundColor: 'transparent',
                            justifyContent: 'center'
                        }}
                        source={{ uri: 'https://habrastorage.org/webt/vo/lg/xb/volgxbgclrhdnqvvi_qdqfc1yna.jpeg'}}
                    />
                </View>
                <Text style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: 'black',
                    backgroundColor: 'transparent',
                    margin: 10,
                }}>Weather forecast</Text>
                <View style={{height: 150}}>
                    <FlatList 
                        style={{
                            backgroundColor: 'black',
                            opacity: 0.5
                        }}
                        horizontal={true}
                        data={horizontalFlatListData}
                        renderItem={({item, index}) => {
                            return (
                                <HorizontalFlatListItem item={item} index={index} parentFlatList={this} />
                            )
                        }}
                        keyExtractor={(item, index) => item.hour}
                    />
                </View>
            </View>
        );
    }
}
